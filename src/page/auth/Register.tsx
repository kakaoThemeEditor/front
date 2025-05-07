import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from "lucide-react";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";
import Cookies from "js-cookie";
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

// sliderStyles 커스텀 스타일

export const Register = () => {
  const navigate = useNavigate();
  const cookieKeys = getCookieKeys();
  const [formData, setFormData] = React.useState({
    email: "",
    // emailVerify: "",
    password: "",
    passwordCheck: "",
  });
  const [revealPassword, setRevealPassword] = React.useState(false);
  const [revealPasswordCheck, setRevealPasswordCheck] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // // 이메일 인증 확인
      // if (!sendEmailVerify) {
      //   toast.error("이메일 인증이 필요합니다.");
      //   return;
      // }

      // 비밀번호 확인
      if (formData.password !== formData.passwordCheck) {
        toast.error("비밀번호가 일치하지 않습니다.");
        return;
      }

      // 회원가입 요청
      const response = await APIClient.post("/auth/register", {
        name: formData.email,
        email: formData.email,
        password: formData.password,
      });

      const { accessToken, refreshToken, user } = response.data;

      // 토큰 저장
      Cookies.set(cookieKeys.accessToken, accessToken);
      Cookies.set(cookieKeys.refreshToken, refreshToken);

      toast.success("회원가입 성공!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "회원가입에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleEmailVerify = async () => {
  //   try {
  //     await APIClient.post("/auth/send-verification-email", {
  //       email: formData.email,
  //     });
  //     setSendEmailVerify(true);
  //     toast.success("인증 이메일이 전송되었습니다.");
  //   } catch (error: any) {
  //     toast.error(
  //       error.response?.data?.message || "이메일 인증에 실패했습니다."
  //     );
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-kakao-dark">
            카카오 에디터 회원가입
          </h2>
          <p className="text-gray-600">얼른 회원가입하고 이용하세요!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <div className="relative mb-5">
              <div className="flex gap-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                  placeholder="이메일을 입력해주세요"
                />
                {/* <Button
                  type="button"
                  onClick={handleEmailVerify}
                  className="mt-1 bg-kakao-dark hover:bg-kakao-dark/90 text-white whitespace-nowrap"
                  disabled={!formData.email}
                >
                  이메일 인증
                </Button> */}
              </div>
            </div>

            {/* {sendEmailVerify && (
              <div>
                <label
                  htmlFor="emailVerify"
                  className="block text-sm font-medium text-gray-700"
                >
                  이메일 인증번호
                </label>
                <Input
                  id="emailVerify"
                  name="emailVerify"
                  type="text"
                  value={formData.emailVerify}
                  onChange={handleChange}
                  className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                  placeholder="인증번호를 입력하세요"
                />
              </div>
            )} */}

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <div className="relative mb-5">
              <Input
                id="password"
                name="password"
                type={revealPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                placeholder="비밀번호 입력(문자, 숫자, 특수문자포함 8자 이상)"
              />
              {revealPassword ? (
                <button
                  onClick={() => setRevealPassword(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-50"
                >
                  <EyeOff className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500" />
                </button>
              ) : (
                <button
                  onClick={() => setRevealPassword(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <EyeIcon className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500" />
                </button>
              )}
            </div>

            <label
              htmlFor="passwordCheck"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호 확인
            </label>
            <div className="relative mb-5">
              <Input
                id="passwordCheck"
                name="passwordCheck"
                type={revealPasswordCheck ? "text" : "password"}
                autoComplete="new-password"
                value={formData.passwordCheck}
                onChange={handleChange}
                className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                placeholder="비밀번호 재입력"
              />
              {revealPasswordCheck ? (
                <button
                  onClick={() => setRevealPasswordCheck(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-50"
                >
                  <EyeOff className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500" />
                </button>
              ) : (
                <button
                  onClick={() => setRevealPasswordCheck(true)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <EyeIcon className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500" />
                </button>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-kakao-dark hover:bg-kakao-dark/90 text-white py-2 rounded-md"
            disabled={
              isLoading ||
              !formData.email ||
              !formData.password ||
              !formData.passwordCheck
            }
          >
            {isLoading ? "회원가입 중..." : "회원가입"}
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <div className="flex justify-center gap-4">
            <Link
              to="/auth/find-email"
              className="text-sm text-gray-500 hover:text-kakao-dark"
            >
              아이디 찾기
            </Link>
            <span className="text-sm text-gray-500">|</span>
            <Link
              to="/auth/find-password"
              className="text-sm text-gray-500 hover:text-kakao-dark"
            >
              비밀번호 찾기
            </Link>
          </div>
          <div>
            <Link
              to="/auth/login"
              className="text-sm text-gray-500 hover:text-kakao-dark"
            >
              이미 계정이 있으신가요? 로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
