import { useState } from "react";
import { IoChevronBack, IoSearch, IoMenu, IoBackspaceOutline } from "react-icons/io5";
import SpeechBubble from "../button/SpeechBubble";
import CircleButton from "../button/CircleButton";
import { PassCodeEditTable } from "../table/PassCodeEditTable";
import { Button } from "../ui/button";
import clsx from "clsx";
import { ThemeStyleDropDown } from "../dropdown-menu/ThemeStyleDropDown";

// 편집 가능한 영역의 타입 정의
interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosTextColor: string;
  iosBulletFirstImage: string;
  iosBulletSecondImage: string;
  iosBulletThirdImage: string;
  iosBulletFourthImage: string;
  iosBulletSelectedFirstImage: string;
  iosBulletSelectedSecondImage: string;
  iosBulletSelectedThirdImage: string;
  iosBulletSelectedFourthImage: string;
  iosKeypadBackgroundColor: string;
  iosKeypadTextNormalColor: string;
  iosKeypadNumberHighlightedImage: string;
}

export default function PassCode() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    backgroundColor: "",
    iosBackgroundImage: "",
    iosTextColor: "",
    iosBulletFirstImage: "",
    iosBulletSecondImage: "",
    iosBulletThirdImage: "",
    iosBulletFourthImage: "",
    iosBulletSelectedFirstImage: "",
    iosBulletSelectedSecondImage: "",
    iosBulletSelectedThirdImage: "",
    iosBulletSelectedFourthImage: "",
    iosKeypadBackgroundColor: "",
    iosKeypadTextNormalColor: "",
    iosKeypadNumberHighlightedImage: "",
  });

  const [activeSelected, setActiveSelected] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)]">
      {/* 왼쪽 */}
      {/* h-[calc(100vh-36px)] xl:h-full 같은 의미이긴함 */}
      <div className="relative flex justify-center items-center min-h-[calc(100vh-36px)] ">
        <div
          className="w-72 xl:w-80 aspect-[9/18.7] bg-white rounded-2xl p-[2px] "
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative flex flex-col justify-center size-full  rounded-2xl border-2 border-white">
            <div className="w-5 h-5 absolute top-7 left-5">
              <CircleButton Number={1} />
            </div>

            <div
              className={clsx(
                "h-3/5  flex flex-col justify-center items-center rounded-t-2xl ",
                themeValues.backgroundColor || "bg-red-200"
              )}
              style={{
                backgroundColor: themeValues.backgroundColor,
                backgroundImage: `url(${themeValues.iosBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative">
                <div className="absolute top-9.5 -left-9 w-8 h-4">
                  <SpeechBubble direction="right">
                    <span className="text-sm">2</span>
                  </SpeechBubble>
                </div>
                <div
                  className={clsx("text-2xl font-bold mt-8 mb-4", themeValues.iosTextColor || "text-black")}
                  style={{ color: themeValues.iosTextColor }}
                >
                  비밀번호
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-4">카카오톡 암호를 입력해주세요.</div>
              <div className="flex gap-2">
                <div
                  className={clsx("relative w-7 h-7 bg-gray-200 rounded-full ")}
                  style={{
                    backgroundImage: `url(${
                      activeSelected ? themeValues.iosBulletSelectedFirstImage : themeValues.iosBulletFirstImage
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-0 -left-9 w-8 h-4">
                    <SpeechBubble direction="right">
                      <span className="text-sm">4</span>
                    </SpeechBubble>
                  </div>
                </div>
                <div
                  className="relative w-7 h-7 bg-gray-200 rounded-full"
                  style={{
                    backgroundImage: `url(${
                      activeSelected ? themeValues.iosBulletSelectedSecondImage : themeValues.iosBulletSecondImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="relative w-7 h-7 bg-gray-200 rounded-full"
                  style={{
                    backgroundImage: `url(${
                      activeSelected ? themeValues.iosBulletSelectedThirdImage : themeValues.iosBulletThirdImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-8 left-0 w-8 h-4">
                    <SpeechBubble direction="top">
                      <span className="text-sm">3</span>
                    </SpeechBubble>
                  </div>
                </div>
                <div
                  className="relative w-7 h-7 bg-gray-200 rounded-full"
                  style={{
                    backgroundImage: `url(${
                      activeSelected ? themeValues.iosBulletSelectedFourthImage : themeValues.iosBulletFourthImage
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="relative h-2/5 w-full"
              style={{
                backgroundColor: themeValues.iosKeypadBackgroundColor,
              }}
            >
              <div className="relative h-full w-full border-3 border-kakao-blue rounded-2xl p-3 grid grid-cols-3 gap-2 place-items-center">
                <div className="w-5 h-5 absolute -left-3 top-1/2 transform -translate-y-1/2">
                  <CircleButton Number={5} />
                </div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">1</div>
                <div
                  className="relative flex flex-col justify-center items-center font-bold text-xl"
                  style={{
                    color: themeValues.iosKeypadTextNormalColor,
                  }}
                >
                  2
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-10 w-8 h-4">
                    <SpeechBubble direction="right">
                      <span className="text-sm">6</span>
                    </SpeechBubble>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">3</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">4</div>
                <div
                  className="relative flex flex-col justify-center items-center font-bold text-xl "
                  style={{
                    backgroundImage: `url(${themeValues.iosKeypadNumberHighlightedImage})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  5
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-6 w-8 h-4">
                    <SpeechBubble direction="right">
                      <span className="text-sm">7</span>
                    </SpeechBubble>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">6</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">7</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">8</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">9</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl"></div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">1</div>
                <div className="flex flex-col justify-center items-center font-bold text-xl">
                  <IoBackspaceOutline className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 왼쪽 끝 */}
      {/* 오른쪽 */}
      <div className="w-full p-6 bg-white border-l-2 border-l-gray-100 overflow-auto">
        <div className="flex justify-between mb-4">
          <ThemeStyleDropDown />
          <Button>저장하기</Button>
        </div>
        <PassCodeEditTable
          themeValues={themeValues}
          setThemeValues={setThemeValues}
          activeSelected={activeSelected}
          setActiveSelected={setActiveSelected}
        />
      </div>
    </div>
  );
}
