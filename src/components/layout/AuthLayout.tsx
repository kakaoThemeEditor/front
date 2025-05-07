import { Navigate, Outlet } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import Slider from "react-slick";
import { useAuth } from "@/hooks/useAuth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeSample1 from "@/assets/Images/themeSample1.webp";
import ThemeSample2 from "@/assets/Images/themeSample2.webp";
import ThemeSample3 from "@/assets/Images/themeSample3.webp";
import ThemeSample4 from "@/assets/Images/themeSample4.webp";
import ThemeSample5 from "@/assets/Images/themeSample5.webp";

const themeSampleList = [ThemeSample1, ThemeSample2, ThemeSample3, ThemeSample4, ThemeSample5];
const sliderStyles = `
  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }
  .slick-slide {
    height: 100%;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated layout: ", isAuthenticated);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "0px",
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: true,
    fade: false,
    vertical: false,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <style>{sliderStyles}</style>
      <div className="min-w-80 w-screen h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* 왼쪽 캐러셀 */}
        <div className="hidden lg:block w-full h-full bg-primary/5">
          <Slider {...settings} className="h-full active:border-none">
            {themeSampleList.map((theme, index) => (
              <div key={index} className="p-6">
                <img src={theme} alt="theme" className="object-contain " />
              </div>
            ))}
          </Slider>
        </div>

        {/* 오른쪽 로그인 폼 */}
        <Outlet />
      </div>
    </>
  );
};
