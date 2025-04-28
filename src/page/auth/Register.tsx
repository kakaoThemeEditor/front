import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from "lucide-react";

// sliderStyles 커스텀 스타일

export const Register = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    emailVerify: "",
    password: "",
    passwordCheck: "",
  });
  const [sendEmailVerify, setSendEmailVerify] = React.useState(false);
  const [revealPassword, setRevealPassword] = React.useState(false);
  const [revealPasswordCheck, setRevealPasswordCheck] = React.useState(false);

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

  const handleEmailVerify = () => {
    // TODO: Implement email verification logic
    setSendEmailVerify(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-kakao-dark">카카오 에디터 회원가입</h2>
          <p className="text-gray-600">얼른 회원가입하고 이용하세요!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <Button
                  type="button"
                  onClick={handleEmailVerify}
                  className="mt-1 bg-kakao-dark hover:bg-kakao-dark/90 text-white whitespace-nowrap"
                >
                  이메일 인증
                </Button>
              </div>
            </div>

            {sendEmailVerify && (
              <div>
                <label htmlFor="emailVerify" className="block text-sm font-medium text-gray-700">
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
            )}

            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                <button onClick={() => setRevealPassword(true)} className="absolute right-2 top-1/2 -translate-y-1/2">
                  <EyeIcon className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500" />
                </button>
              )}
            </div>

            <label htmlFor="passwordCheck" className="block text-sm font-medium text-gray-700">
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
            disabled={!formData.email || !formData.emailVerify || !formData.password || !formData.passwordCheck}
          >
            회원가입
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <div className="flex justify-center gap-4">
            <Link to="/auth/find-email" className="text-sm text-gray-500 hover:text-kakao-dark">
              아이디 찾기
            </Link>
            <span className="text-sm text-gray-500">|</span>
            <Link to="/auth/find-password" className="text-sm text-gray-500 hover:text-kakao-dark">
              비밀번호 찾기
            </Link>
          </div>
          <div>
            <Link to="/auth/login" className="text-sm text-gray-500 hover:text-kakao-dark">
              이미 계정이 있으신가요? 로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
