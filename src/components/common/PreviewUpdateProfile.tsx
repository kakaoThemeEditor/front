import { IoChevronUp } from "react-icons/io5";
import { SmallText } from "./SmallText";
import UpdatedImg02 from "../../assets/UpdatedProfile02.png";

export function PreviewUpdateProfile({ children, borderColor }: { children?: React.ReactNode; borderColor?: string }) {
  return (
    <div className="relative">
      <div className="border-b-[1px] mb-1 transform scale-y-[0.1] origin-bottom" style={{ borderColor }}></div>
      {children}
      <div className="flex justify-between items-center text-[10px] px-4 py-1">
        <SmallText>업데이트한 프로필 3</SmallText>
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
      <div className=" border-b-[1px]  transform scale-y-[0.1] origin-bottom" style={{ borderColor }}></div>
    </div>
  );
}
