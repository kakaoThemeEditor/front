import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { APIClient } from "@/api/ApiHandler";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MOCK_COOKIE_KEYS } from "@/mocks/handlers";

const isMockServer = import.meta.env.VITE_MOCK_SERVER === "true";

const getCookieKeys = () => {
  if (isMockServer) {
    return {
      accessToken: MOCK_COOKIE_KEYS.ACCESS_TOKEN,
      refreshToken: MOCK_COOKIE_KEYS.REFRESH_TOKEN,
    };
  }
  return {
    accessToken: "kakao_access_token",
    refreshToken: "kakao_refresh_token",
  };
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const accessToken = Cookies.get(getCookieKeys().accessToken);
    const refreshToken = Cookies.get(getCookieKeys().refreshToken);
    return !!(accessToken || refreshToken);
  });
  const navigate = useNavigate();
  const cookieKeys = getCookieKeys();

  const VerifyToken = async () => {
    const accessToken = Cookies.get(cookieKeys.accessToken);
    const refreshToken = Cookies.get(cookieKeys.refreshToken);

    if (!accessToken && !refreshToken) {
      setIsAuthenticated(false);
      return null;
    }

    if (accessToken) {
      try {
        // 액세스 토큰 유효성 검사
        await APIClient.get("/auth/verify", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setIsAuthenticated(true);
        return { accessToken };
      } catch (error) {
        // 액세스 토큰이 만료된 경우 리프레시 토큰으로 갱신 시도
        if (refreshToken) {
          await refreshMutation.mutateAsync(refreshToken);
        } else {
          setIsAuthenticated(false);
          navigate("/auth/login");
        }
      }
    }

    if (refreshToken) {
      await refreshMutation.mutateAsync(refreshToken);
    }

    return null;
  };

  // 토큰 갱신 mutation
  // useMutation은 리액트 쿼리의 훅으로 서버에 데이터를 수정/갱신 하는 비동기 요청을 보낼 때 사용
  const refreshMutation = useMutation({
    // mutationFn은 비동기 요청을 보낼 때 사용
    mutationFn: async (refreshToken: string) => {
      const response = await APIClient.post("/auth/refresh", { refreshToken });
      return response.data;
    },
    // onSuccess는 비동기 요청이 성공했을 때 실행되는 함수
    onSuccess: (data) => {
      const { accessToken, refreshToken: newRefreshToken } = data;
      Cookies.set(cookieKeys.accessToken, accessToken);
      Cookies.set(cookieKeys.refreshToken, newRefreshToken);
      setIsAuthenticated(true);
    },
    // onError는 비동기 요청이 실패했을 때 실행되는 함수
    onError: () => {
      logout();
    },
  });

  // 인증 상태 체크 query
  // useQuery는 서버에서 데이터를 가져오는 비동기 요청을 보낼 때 사용
  const { data, isLoading, error } = useQuery({
    // queryKey는 비동기 요청을 식별하는 고유 키
    queryKey: ["auth"],
    // queryFn은 비동기 요청을 보낼 때 사용
    queryFn: async () => {
      return VerifyToken();
    },
    // retry는 비동기 요청이 실패했을 때 재시도 여부, false는 재시도 하지 않음
    retry: false,
    // refetchOnWindowFocus는 윈도우가 포커스를 잃었을 때 데이터를 다시 가져올지 여부, false는 다시 가져오지 않음
    refetchOnWindowFocus: false,
  });

  const logout = () => {
    Cookies.remove(cookieKeys.accessToken);
    Cookies.remove(cookieKeys.refreshToken);
    setIsAuthenticated(false);
    navigate("/auth/login");
  };

  // 페이지 이동 시 인증 상태 확인 (ProtectedRoute에서만 사용)
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const accessToken = Cookies.get(cookieKeys.accessToken);
  //     const refreshToken = Cookies.get(cookieKeys.refreshToken);

  //     if (!accessToken && !refreshToken) {
  //       setIsAuthenticated(false);
  //       navigate("/auth/login");
  //       return;
  //     }

  //     if (!isAuthenticated) {
  //       await VerifyToken();
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  return {
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    logout,
  };
};
