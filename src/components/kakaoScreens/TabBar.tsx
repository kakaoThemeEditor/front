import {
  ArrowRightIcon,
  GiftIcon,
  Music,
  PlusIcon,
  Search,
  Settings,
  UserPlus,
} from "lucide-react";
import { IoChevronForward, IoChevronUp, IoGift } from "react-icons/io5";
import ProfileImg01 from "../../assets/Images/profileImg01@3x.png";
import UpdatedImg02 from "../../assets/UpdatedProfile02.png";
import MaintabBgImage from "../../assets/Images/maintabBgImage@2x.png";
import SpeechBubble from "../button/SpeechBubble";
import CircleButton from "../button/CircleButton";
import { TabBarEditTable } from "../table/TabBarEditTable";
import { useState } from "react";

interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosFriendsNormalIconImage: string;
  iosFriendsSelectedIconImage: string;
  iosChatsNormalIconImage: string;
  iosChatsSelectedIconImage: string;
  iosOpenchatsNormalIconImage: string;
  iosOpenchatsSelectedIconImage: string;
  iosShoppingNormalIconImage: string;
  iosShoppingSelectedIconImage: string;
  iosMoreNormalIconImage: string;
  iosMoreSelectedIconImage: string;
}

export default function TabBar() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    backgroundColor: "#FFFFFF",
    iosBackgroundImage: MaintabBgImage,
    iosFriendsNormalIconImage: "",
    iosFriendsSelectedIconImage: "",
    iosChatsNormalIconImage: "",
    iosChatsSelectedIconImage: "",
    iosOpenchatsNormalIconImage: "",
    iosOpenchatsSelectedIconImage: "",
    iosShoppingNormalIconImage: "",
    iosShoppingSelectedIconImage: "",
    iosMoreNormalIconImage: "",
    iosMoreSelectedIconImage: "",
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full text-sm">
      {/* 왼쪽 */}
      <div className="flex justify-center items-center">
        <div
          className="h-[700px] w-[360px] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative flex flex-col size-full rounded-2xl border-2 border-white bg-red-100 ">
            {/* 친구 헤더 */}
            <div className="w-full flex justify-between mt-2 px-4 pt-4">
              <div className="text-base font-bold">친구</div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <UserPlus className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Music className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* 업데이트 */}
            <div className="px-4 py-0.5">
              <div className="flex justify-between items-center w-full rounded-2xl bg-black/10 px-1 py-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-2xl py-0.5 text-[9px] px-2 flex justify-center items-center text-white bg-amber-700 ">
                    업데이트
                  </div>
                  <div className="text-xs">채팅방에서 조용히 나가기</div>
                </div>
                <div className="">
                  <IoChevronForward className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 본인 프로필 */}
            <div className="px-4 py-3  border-b-2 border-b-gray-300">
              <div className="flex justify-between items-center gap-2 ">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl">
                    <img
                      src={ProfileImg01}
                      className="size-full object-contain rounded-2xl"
                    />
                  </div>
                  <div className="">이름</div>
                </div>
                <div className=" flex rounded-2xl bg-transparent border-2 text-xs px-1 py-0.5">
                  <span className="">멀티프로필</span>
                  <PlusIcon className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 업데이트한 프로필 */}
            <div className="flex justify-between items-center text-[10px] px-4 py-2 ">
              <span>업데이트한 프로필 3</span>
              <span>
                <IoChevronUp />
              </span>
            </div>
            <div className="flex gap-2 px-4 pb-3 border-b-2 border-b-gray-300">
              {/* 이미지, 이름 */}
              <div className="flex flex-col justify-center items-center">
                <div className="w-11 h-11 rounded-full">
                  <img
                    src={UpdatedImg02}
                    className="size-full object-cover rounded-full p-1"
                  />
                </div>
                <div className="text-sm mr-1">이름</div>
              </div>
              {/* 이미지, 이름 */}
              <div className="flex flex-col justify-center items-center">
                <div className="w-11 h-11 rounded-full">
                  <img
                    src={UpdatedImg02}
                    className="size-full object-cover rounded-full p-1"
                  />
                </div>
                <div className="text-sm mr-1">이름</div>
              </div>
            </div>
            {/* 펑 */}
            <div className="flex justify-between text-xs px-4 py-2">
              <div className="text-[10px]">펑</div>
              <IoChevronUp />
            </div>

            <div className="flex px-4 items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-red-200/80 flex justify-center items-center">
                <PlusIcon />
              </div>
              <div className="">나의 펑을 생성해보세요!</div>
            </div>
            {/* 광고 */}
            <div className="px-4 py-6">
              <div className="w-full h-16 bg-gray-200 rounded-xl font-bold flex items-center p-4">
                광고하기
              </div>
            </div>

            {/* 생일인 친구 */}
            <div className="text-[10px] px-4">생일인 친구</div>
            {/* 생일인 친구 프로필 */}
            <div className="px-4 py-2 bg-black/10 mb-8">
              <div className="flex justify-between items-center gap-2 ">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={ProfileImg01}
                      className="size-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm">이름</div>
                    <div className="text-xs text-gray-500">오늘 4월30일</div>
                  </div>
                </div>
                <div className="flex items-center rounded-2xl bg-transparent border-2 text-xs px-1 py-0.5">
                  <span className="">선물하기</span>
                  <GiftIcon className="w-3 h-3" />
                </div>
              </div>
            </div>
            {/* 드디어 변경하는곳 나옴 ㅋ */}
            <div
              className="relative flex h-20 p-4 justify-between "
              style={{
                backgroundImage: `url(${MaintabBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute -left-4 top-2 w-6 h-6">
                <CircleButton Number={1} className="text-xs" />
              </div>
              <div className="relative w-12 h-12 bg-gray-200 rounded-full">
                <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
                  <SpeechBubble direction={"bottom"} children={2} />
                </div>
              </div>
              <div className="relative w-12 h-12 bg-gray-200 rounded-full">
                <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
                  <SpeechBubble direction={"bottom"} children={3} />
                </div>
              </div>
              <div className="relative w-12 h-12 bg-gray-200 rounded-full">
                <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
                  <SpeechBubble direction={"bottom"} children={4} />
                </div>
              </div>
              <div className="relative w-12 h-12 bg-gray-200 rounded-full">
                <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
                  <SpeechBubble direction={"bottom"} children={5} />
                </div>
              </div>
              <div className="relative w-12 h-12 bg-gray-200 rounded-full">
                <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
                  <SpeechBubble direction={"bottom"} children={6} />
                </div>
              </div>
            </div>
            {/* 변경하는곳 끝 */}
          </div>
        </div>
      </div>
      {/* 오른쪽  */}
      <TabBarEditTable
        themeValues={themeValues}
        setThemeValues={setThemeValues}
      />
    </div>
  );
}
