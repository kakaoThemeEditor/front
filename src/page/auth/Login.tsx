import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { KakaoLoginButton } from "@/components/button/KakaoLoginButton";

// 슬라이' 커스텀 스타일
const sliderStyles = `
  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }
  .slick-slide {
    height: 100%;
    > div {
      height: 100%;
    }
  }
`;

export const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    fade: false,
    vertical: false,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <>
      <style>{sliderStyles}</style>
      <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* 왼쪽 캐러셀 */}
        <div className="hidden lg:block w-full h-screen bg-primary/5">
          <Slider {...settings}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-full">
                <Card className="h-[700px] m-8 rounded-xl ">
                  <CardContent className="flex h-full items-center justify-center p-0">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>

        {/* 오른쪽 로그인 폼 */}
        <div className="flex flex-col items-center justify-center p-8 w-full h-full">
          <div className="w-full max-w-md space-y-8 ">
            <div className="text-center ">
              <h2 className="text-xl font-bold">카카오 에디터에 오신걸 환영합니다!</h2>
              <p className="mt-2 text-sm text-gray-600">카카오 에디터에 오신걸 환영합니다!</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
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
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
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
                    placeholder="Enter your password"
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

              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
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
              <a href="#" className="text-sm text-gray-500 font-medium hover:underline">
                회원가입
              </a>
              <a href="#" className="text-sm text-gray-500 font-medium hover:underline">
                아이디 찾기 | 비밀번호 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
