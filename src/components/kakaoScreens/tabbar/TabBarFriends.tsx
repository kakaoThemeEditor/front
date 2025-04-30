import { PlusIcon, GiftIcon } from "lucide-react";
import { IoChevronUp } from "react-icons/io5";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
export function TabBarFriends({ className }: { className?: string }) {
  return (
    <>
      {/* 펑 */}
      <div className={clsx("flex justify-between text-xs px-4 py-2", className)}>
        <div className="text-[10px]">펑</div>
        <IoChevronUp />
      </div>

      <div className="flex px-4 items-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-red-200/80 flex justify-center items-center">
          <PlusIcon />
        </div>
        <div>나의 펑을 생성해보세요!</div>
      </div>

      {/* 광고 */}
      <div className="px-4 py-6">
        <div className="w-full h-16 bg-gray-200 rounded-xl font-bold flex items-center p-4">광고하기</div>
      </div>

      {/* 생일인 친구 */}
      <div className="text-[10px] px-4 pb-1">생일인 친구</div>
      {/* 생일인 친구 프로필 */}
      <div className="px-4 py-2 bg-black/10 mb-8">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img src={ProfileImg01} className="size-full object-contain rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="text-sm">이름</div>
              <div className="text-xs text-gray-500">오늘 4월30일</div>
            </div>
          </div>
          <div className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[11px]  px-2 py-1">
            <span>선물하기</span>
            <GiftIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
    </>
  );
}
