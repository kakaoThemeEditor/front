import { Search, Speech } from "lucide-react";
import { UserPlus } from "lucide-react";
import { Music } from "lucide-react";
import { Settings } from "lucide-react";
import clsx from "clsx";
import ProfileImg01 from "../../assets/Images/profileImg01@3x.png";
import SpeechBubble from "../button/SpeechBubble";
import MaintabBgImage from "../../assets/Images/maintabBgImage@2x.png";
import { useState } from "react";
import MainviewStyle1EditTable from "../table/MainviewStyle1EditTable";
import { Button } from "../ui/button";
import { ThemeStyleDropDown } from "../dropdown-menu/ThemeStyleDropDown";
import CircleButton from "../button/CircleButton";

interface ThemeValues {
  iosTextColor: string;
}

export default function MainviewStyle1() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    iosTextColor: "#FFFFFF",
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)] text-sm">
      {/* 왼쪽 */}
      <div className="relative flex justify-center items-center min-h-[calc(100vh-36px)]  border-r-2 border-r-gray-100 overflow-auto">
        <div
          className="w-64 xl:w-72 aspect-[9/18.7] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative h-full w-full flex flex-col justify-center size-full rounded-2xl border-2 border-white">
            <div
              className={clsx(
                "h-full w-full flex flex-col items-center rounded-2xl bg-red-100"
              )}
            >
              {/* 헤더 */}
              <div
                className={clsx(
                  "w-full flex items-center justify-between mt-2 px-3 pt-1"
                )}
              >
                <div className="relative text-xs xl:text-sm font-bold">
                  친구
                  <SpeechBubble
                    direction="bottom"
                    className="absolute -top-4.5 right-0"
                  >
                    1
                  </SpeechBubble>
                </div>
                <div className="flex">
                  <button className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <Search className="w-3 h-3 xl:w-4 xl:h-4" />
                    <SpeechBubble
                      direction="bottom"
                      className="absolute -top-3.5 right-0"
                    >
                      1
                    </SpeechBubble>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <UserPlus className="w-3 h-3 xl:w-4 xl:h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <Music className="w-3 h-3 xl:w-4 xl:h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                    <Settings className="w-3 h-3 xl:w-4 xl:h-4" />
                  </button>
                </div>
              </div>
              {/* 광고 */}
              <div className="px-3.5 xl:px-4 py-3 xl:py-4 w-full">
                <div className="w-full h-10 xl:h-12 text-xs xl:text-sm bg-gray-200 rounded-xl font-bold flex items-center p-3 xl:p-4">
                  광고하기
                </div>
              </div>
              {/* 채팅 목록 */}
              {Array(3)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div
                      className="flex justify-between w-full px-4 py-2"
                      key={index}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-2xl">
                          <img
                            src={ProfileImg01}
                            className="size-full object-contain rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[10px] xl:text-xs">어피치</div>
                          <div className="text-[8px] xl:text-xs">
                            오늘 장보기 목록
                          </div>
                        </div>
                      </div>
                      <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
                    </div>
                  );
                })}
              <div className="flex justify-between w-full px-4 py-2 bg-black/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-2xl">
                    <img
                      src={ProfileImg01}
                      className="size-full object-contain rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[10px] xl:text-xs">어피치</div>
                    <div className="text-[8px] xl:text-xs">
                      오늘 장보기 목록
                    </div>
                  </div>
                </div>
                <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
              </div>
              {/*  */}
              <div className="flex justify-between w-full px-4 py-2 ">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-2xl">
                    <img
                      src={ProfileImg01}
                      className="size-full object-contain rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[10px] xl:text-xs">어피치</div>
                    <div className="text-[8px] xl:text-xs">
                      오늘 장보기 목록
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
                  <div className="text-white text-[8px] xl:text-[10px] bg-red-500 rounded-full px-1 xl:px-1.5">
                    18
                  </div>
                </div>
              </div>
              {/* 채팅 목록 끝 */}
              {/* mt-auto는 요소가 맨아래 붙는다. */}
              <div
                className="relative flex h-16 xl:h-18 p-4 justify-between items-center w-full mt-auto rounded-b-2xl "
                style={{
                  backgroundImage: `url(${MaintabBgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -left-4 top-2 w-6 h-6"></div>
                <div className="relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full"></div>
                <div className="relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full"></div>
                <div className="relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full"></div>
                <div className="relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full"></div>
                <div className="relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full"></div>
              </div>
              {/* 맨 아래부분 */}
            </div>
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="w-full xl:w-11/12 mx-auto p-6 bg-white overflow-auto ">
        <div className="flex justify-between mb-4">
          <ThemeStyleDropDown />
          <Button size="sm" className="text-xs">
            저장하기
          </Button>
        </div>

        <MainviewStyle1EditTable
          themeValues={themeValues}
          setThemeValues={setThemeValues}
        />
      </div>
    </div>
  );
}
