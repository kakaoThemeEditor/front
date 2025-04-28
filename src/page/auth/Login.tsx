import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { KakaoLoginButton } from "@/components/button/KakaoLoginButton";

// sliderStyles 커스텀 스타일
export const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <Button type="submit" className="w-full bg-kakao-dark hover:bg-kakao-dark/90 text-white">
                로그인
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
                console.log("카카오 로그인");
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
