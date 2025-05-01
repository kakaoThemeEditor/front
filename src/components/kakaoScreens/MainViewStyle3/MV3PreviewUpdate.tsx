import { IoChevronForward } from "react-icons/io5";
import clsx from "clsx";

export function MV3PreviewUpdate({ className }: { className?: string }) {
  return (
    <div className={clsx("px-3 py-0.5", className)}>
      <div className="flex justify-between items-center w-full rounded-2xl bg-black/10 px-1.5 py-1.5 xl:px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-2xl py-0.5 text-[7px] xl:text-[8px] px-2 flex justify-center items-center text-white bg-amber-700">
            업데이트
          </div>
          <div className="text-[9px] xl:text-[10px]">채팅방에서 조용히 나가기</div>
        </div>
        <div>
          <IoChevronForward className="w-3 h-3 xl:w-4 xl:h-4" />
        </div>
      </div>
    </div>
  );
}
