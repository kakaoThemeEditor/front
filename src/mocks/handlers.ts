import { http, HttpResponse } from "msw";

// API URL을 실제 요청 URL과 일치하도록 수정
const API_URL = ""; // baseURL을 제거하고 상대 경로만 사용

// 목 서버용 쿠키 키
const MOCK_COOKIE_KEYS = {
  ACCESS_TOKEN: "mock_access_token",
  REFRESH_TOKEN: "mock_refresh_token",
};

export const handlers = [
  // 로그인
  http.post("/auth/login", async ({ request }) => {
    const { email, password } = (await request.json()) as { email: string; password: string };

    if (email === "test@example.com" && password === "1") {
      return HttpResponse.json({
        accessToken: MOCK_COOKIE_KEYS.ACCESS_TOKEN,
        refreshToken: MOCK_COOKIE_KEYS.REFRESH_TOKEN,
        user: {
          id: 1,
          email: "test@example.com",
          name: "Test User",
        },
      });
    }

    return new HttpResponse(null, { status: 401 });
  }),

  // 회원가입
  http.post("/auth/register", async ({ request }) => {
    const { email, password } = (await request.json()) as { email: string; password: string };

    return HttpResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: 1,
          email,
          name: email.split("@")[0],
        },
        accessToken: MOCK_COOKIE_KEYS.ACCESS_TOKEN,
        refreshToken: MOCK_COOKIE_KEYS.REFRESH_TOKEN,
      },
      { status: 201 }
    );
  }),

  // 토큰 갱신
  http.post("/auth/refresh", async ({ request }) => {
    const { refreshToken } = (await request.json()) as { refreshToken: string };

    if (refreshToken === MOCK_COOKIE_KEYS.REFRESH_TOKEN) {
      return HttpResponse.json({
        accessToken: MOCK_COOKIE_KEYS.ACCESS_TOKEN,
        refreshToken: MOCK_COOKIE_KEYS.REFRESH_TOKEN,
      });
    }

    return new HttpResponse(null, { status: 401 });
  }),

  // 이메일 인증
  http.post("/auth/verify-email", async ({ request }) => {
    const { email, code } = (await request.json()) as { email: string; code: string };

    if (code === "123456") {
      return HttpResponse.json({ message: "Email verified successfully" });
    }

    return new HttpResponse(null, { status: 400 });
  }),

  // 토큰 검증
  http.get("/auth/verify", async ({ request }) => {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return new HttpResponse(null, { status: 401 });
    }

    const accessToken = authHeader.split(" ")[1];
    if (accessToken === MOCK_COOKIE_KEYS.ACCESS_TOKEN) {
      return HttpResponse.json({ message: "Token verified successfully" });
    }

    return new HttpResponse(null, { status: 401 });
  }),
];

export { MOCK_COOKIE_KEYS };
