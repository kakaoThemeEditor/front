import { PlusIcon, GiftIcon } from "lucide-react";
import { IoChevronUp } from "react-icons/io5";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
export function MV2PreviewFriends({ className }: { className?: string }) {
  return (
    <>
      {/* 펑 */}
      <div className={clsx("flex justify-between text-xs px-4 py-1.5", className)}>
        <div className="text-[10px] xl:text-xs">펑</div>
        <IoChevronUp className="w-2 h-2 xl:w-3 xl:h-3" />
      </div>

      <div className="flex px-4 items-center gap-2">
        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-2xl bg-red-200/80 flex justify-center items-center">
          <PlusIcon className="w-3 h-3 xl:w-4 xl:h-4 text-gray-600" />
        </div>
        <div className="text-[8px] xl:text-xs">나의 펑을 생성해보세요!</div>
      </div>

      {/* 광고 */}
      <div className="px-3.5 xl:px-4 py-3 xl:py-4">
        <div className="w-full h-10 xl:h-12 text-xs xl:text-sm bg-gray-200 rounded-xl font-bold flex items-center p-3 xl:p-4">
          광고하기
        </div>
      </div>

      {/* 생일인 친구 */}
      <div className="text-[10px] xl:text-xs px-4 mb-0.5">생일인 친구</div>
      {/* 생일인 친구 프로필 */}
      <div className="px-4 py-2 bg-black/10 mb-2 xl:mb-5">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 xl:w-9 xl:h-9 rounded-full">
              <img src={ProfileImg01} className="size-full object-contain rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] xl:text-xs">이름</div>
              <div className="text-[8px] xl:text-[10px] text-gray-500">오늘 4월30일</div>
            </div>
          </div>
          <div className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[9px] xl:text-[10px]  px-2 py-1">
            <span className="text-[8px] xl:text-[9px]">선물하기</span>
            <GiftIcon className="w-3 h-3 xl:w-4 xl:h-4" />
          </div>
        </div>
      </div>
      {/* 즐겨찾기 */}
      <div className="text-[10px] xl:text-xs px-4 mb-0.5">즐겨찾기</div>
      {/* 즐겨찾기 친구 프로필 */}
      <div className="px-4 py-2  mb-2 xl:mb-5">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 xl:w-9 xl:h-9 rounded-full">
              <img src={ProfileImg01} className="size-full object-contain rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] xl:text-xs">이름</div>
              <div className="text-[8px] xl:text-[10px] text-gray-500">오늘 4월30일</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
