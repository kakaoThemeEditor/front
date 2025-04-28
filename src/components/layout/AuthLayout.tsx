import { Navigate, Outlet } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import Slider from "react-slick";
import { useAuth } from "@/hooks/useAuth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
export const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

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
        <Outlet />
      </div>
    </>
  );
};
