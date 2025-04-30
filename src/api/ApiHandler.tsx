import axios from "axios";
import Cookies from "js-cookie";
import { MOCK_COOKIE_KEYS } from "@/mocks/handlers";

const isMockServer = import.meta.env.VITE_MOCK_SERVER === "true";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5173";

// 쿠키에서 토큰을 가져오는 유틸리티 함수
const getTokenFromCookie = (): string | null => {
  if (isMockServer) {
    return Cookies.get(MOCK_COOKIE_KEYS.ACCESS_TOKEN) || null;
  }
  return Cookies.get("kakao_access_token") || null;
};

// API 클라이언트 생성
export const APIClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// API 요청 인터셉터
APIClient.interceptors.request.use((config) => {
  const token = getTokenFromCookie();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // FormData가 아닌 경우에만 Content-Type을 application/json으로 설정
  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json";
  } else {
    // FormData인 경우 Content-Type 헤더를 명시적으로 삭제
    delete config.headers["Content-Type"];
  }

  return config;
});

// API 응답 인터셉터
// 여기를 로그인해야하는곳에서만 이렇게 처리해야할듯
// APIClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       const refreshToken = isMockServer
//         ? Cookies.get(MOCK_COOKIE_KEYS.REFRESH_TOKEN)
//         : Cookies.get("kakao_refresh_token");

//       if (!refreshToken) {
//         window.location.href = "/auth/login";
//         return Promise.reject(error);
//       }

//       try {
//         // 리프레시 토큰으로 새 액세스 토큰 요청
//         const response = await axios.post(
//           `${API_URL}/auth/refresh`,
//           { refreshToken },
//           {
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true,
//           }
//         );

//         const { accessToken, refreshToken: newRefreshToken } = response.data;

//         // 새 토큰 저장
//         if (isMockServer) {
//           Cookies.set(MOCK_COOKIE_KEYS.ACCESS_TOKEN, accessToken);
//           Cookies.set(MOCK_COOKIE_KEYS.REFRESH_TOKEN, newRefreshToken);
//         } else {
//           Cookies.set("kakao_access_token", accessToken);
//           Cookies.set("kakao_refresh_token", newRefreshToken);
//         }

//         // 원래 요청 재시도
//         error.config.headers.Authorization = `Bearer ${accessToken}`;
//         return APIClient(error.config);
//       } catch (refreshError) {
//         window.location.href = "/auth/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
