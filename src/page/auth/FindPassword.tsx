import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

// sliderStyles 커스텀 스타일

export const FindPassword = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    emailVerify: "",
    password: "",
    passwordCheck: "",
  });
  const [emailVerify, setEmailVerify] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("token", "dummy-token");
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailVerify = () => {
    // TODO: Implement email verification logic
    setEmailVerify(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-kakao-dark">카카오 에디터 비밀번호 찾기</h2>
          <p className="text-gray-600">얼른 비밀번호 찾고 이용하세요!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일
              </label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                  placeholder="이메일을 입력해주세요"
                />
                <Button
                  type="button"
                  onClick={handleEmailVerify}
                  className="mt-1 bg-kakao-dark hover:bg-kakao-dark/90 text-white whitespace-nowrap"
                >
                  이메일 인증
                </Button>
              </div>
            </div>

            {emailVerify && (
              <div>
                <label htmlFor="emailVerify" className="block text-sm font-medium text-gray-700">
                  이메일 인증번호
                </label>
                <Input
                  id="emailVerify"
                  name="emailVerify"
                  type="text"
                  required
                  value={formData.emailVerify}
                  onChange={handleChange}
                  className="mt-1 focus:border-kakao-dark focus:ring-kakao-dark rounded-md"
                  placeholder="인증번호를 입력하세요"
                />
              </div>
            )}
          </div>

          <Button type="submit" className="w-full bg-kakao-dark hover:bg-kakao-dark/90 text-white py-2 rounded-md">
            비밀번호 찾기
          </Button>

          {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">또는</span>
                </div>
              </div> */}
        </form>

        <div className="mt-4 text-center space-y-2">
          <div className="flex justify-center gap-4">
            <Link to="/auth/find-email" className="text-sm text-gray-500 hover:text-kakao-dark">
              이메일 찾기
            </Link>
            <span className="text-sm text-gray-500">|</span>
            <Link to="/auth/login" className="text-sm text-gray-500 hover:text-kakao-dark">
              이미 계정이 있으신가요? 로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
