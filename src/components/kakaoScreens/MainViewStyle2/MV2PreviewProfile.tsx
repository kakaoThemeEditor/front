import { PlusIcon } from "lucide-react";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import UpdatedImg02 from "../../../assets/UpdatedProfile02.png";
import { IoChevronUp } from "react-icons/io5";
import clsx from "clsx";
export function MV2PreviewProfile({ className }: { className?: string }) {
  return (
    <>
      {/* 본인 프로필 */}
      <div className={clsx("px-4 py-2", className)}>
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-2xl">
              <img src={ProfileImg01} className="size-full object-contain rounded-2xl" />
            </div>
            <div className="text-xs xl:text-sm">이름</div>
          </div>
          <div className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[10px] xl:text-[11px]  px-2 py-1">
            <span className="text-[8px] xl:text-[9px] mr-0.5">멀티프로필</span>
            <PlusIcon className="w-2 h-2 xl:w-3 xl:h-3" />
          </div>
        </div>
      </div>

      {/* 업데이트한 프로필 */}
      <div className="flex justify-between items-center text-[10px] px-4 py-1">
        <span className="text-[8px] xl:text-[9px]">업데이트한 프로필 3</span>
        <span>
          <IoChevronUp className="w-2 h-2 xl:w-3 xl:h-3" />
        </span>
      </div>
      <div className="flex gap-2 px-4 pb-1 ">
        {/* 이미지, 이름 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full">
            <img src={UpdatedImg02} className="size-full object-cover rounded-full p-1" />
          </div>
          <div className="text-[8px] xl:text-xs mr-1">이름</div>
        </div>
        {/* 이미지, 이름 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full">
            <img src={UpdatedImg02} className="size-full object-cover rounded-full p-1" />
          </div>
          <div className="text-[8px] xl:text-xs mr-1">이름</div>
        </div>
      </div>
    </>
  );
}
