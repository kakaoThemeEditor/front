import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from "lucide-react";

// sliderStyles 커스텀 스타일

export const SetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    emailVerify: "",
    password: "",
    passwordCheck: "",
  });
  const [emailVerify, setEmailVerify] = React.useState(false);
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
    setEmailVerify(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-kakao-dark">카카오 에디터 비밀번호 재설정</h2>
          <p className="text-gray-600">얼른 비밀번호를 재설정 하고 이용하세요!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
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

          <Button type="submit" className="w-full bg-kakao-dark hover:bg-kakao-dark/90 text-white py-2 rounded-md">
            비밀번호 재설정
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
          <Link to="/auth/login" className="text-sm text-gray-500 hover:text-kakao-dark">
            계정이 있으신가요? 로그인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};
