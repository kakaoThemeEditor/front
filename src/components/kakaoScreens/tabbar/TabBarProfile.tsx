import { PlusIcon } from "lucide-react";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import UpdatedImg02 from "../../../assets/UpdatedProfile02.png";
import { IoChevronUp } from "react-icons/io5";
import clsx from "clsx";
export function TabBarProfile({ className }: { className?: string }) {
  return (
    <>
      {/* 본인 프로필 */}
      <div className={clsx("px-4 py-3", className)}>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl">
              <img src={ProfileImg01} className="size-full object-contain rounded-2xl" />
            </div>
            <div>이름</div>
          </div>
          <div className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[11px]  px-2 py-1">
            <span>멀티프로필</span>
            <PlusIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 업데이트한 프로필 */}
      <div className="flex justify-between items-center text-[10px] px-4 py-2">
        <span>업데이트한 프로필 3</span>
        <span>
          <IoChevronUp />
        </span>
      </div>
      <div className="flex gap-2 px-4 pb-3 ">
        {/* 이미지, 이름 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-11 h-11 rounded-full">
            <img src={UpdatedImg02} className="size-full object-cover rounded-full p-1" />
          </div>
          <div className="text-sm mr-1">이름</div>
        </div>
        {/* 이미지, 이름 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-11 h-11 rounded-full">
            <img src={UpdatedImg02} className="size-full object-cover rounded-full p-1" />
          </div>
          <div className="text-sm mr-1">이름</div>
        </div>
      </div>
    </>
  );
}
