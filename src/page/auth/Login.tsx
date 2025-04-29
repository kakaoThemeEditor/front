import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { KakaoLoginButton } from "@/components/button/KakaoLoginButton";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { MOCK_COOKIE_KEYS } from "@/mocks/handlers";
import { useAuth } from "@/hooks/useAuth";
import { CheckCircleIcon } from "lucide-react";

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

// sliderStyles 커스텀 스타일
export const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  console.log(isAuthenticated);
  const navigate = useNavigate();
  const cookieKeys = getCookieKeys();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await APIClient.post("/auth/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      Cookies.set(cookieKeys.accessToken, accessToken);
      Cookies.set(cookieKeys.refreshToken, refreshToken);

      toast.success("환영합니다!", {
        description: "카카오 에디터에 성공적으로 로그인했습니다.",
        duration: 2000,
        className: "bg-kakao-yellow text-white",
        position: "top-center",
      });
      setIsAuthenticated(true);
      navigate("/");
    },
    onError: (error: any) => {
      toast.error("로그인 실패", {
        description: error.response?.data?.message || "이메일과 비밀번호를 확인해주세요.",
        duration: 2000,
        className: "bg-kakao-dark text-white",
        position: "top-center",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full">
      <div className="w-full max-w-md space-y-8 ">
        <div className="text-center ">
          <h2 className="text-sm sm:text-base lg:text-xl font-bold">카카오 에디터에 오신걸 환영합니다!</h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-sm text-gray-600">카카오 에디터에 오신걸 환영합니다!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                이메일
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                placeholder="이메일을 입력하세요"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                비밀번호
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button
                type="submit"
                className="w-full bg-kakao-dark hover:bg-kakao-dark/90 text-white"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "로그인 중..." : "로그인"}
              </Button>
            </div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            {/* whitespace-nowrap 줄바꿈 없음  */}
            <span className="px-3 text-xs text-muted-foreground whitespace-nowrap">또는</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div>
            <KakaoLoginButton
              type="button"
              onClick={() => {
                // 카카오 로그인 처리
              }}
            />
          </div>
        </form>
        <div className="mt-2 text-center flex justify-between gap-2 ">
          <Link to="/auth/register" className="text-sm text-gray-500 font-medium hover:underline">
            회원가입
          </Link>
          <div className="flex ">
            <Link to="/auth/find-email" className="text-sm text-gray-500 font-medium hover:underline">
              아이디 찾기
            </Link>
            <span className="text-sm text-gray-500 font-medium px-1.5">|</span>

            <Link to="/auth/find-password" className="text-sm text-gray-500 font-medium hover:underline">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
