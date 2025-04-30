import { IoChevronForward } from "react-icons/io5";
import clsx from "clsx";

export function TabBarUpdate({ className }: { className?: string }) {
  return (
    <div className={clsx("px-4 py-0.5", className)}>
      <div className="flex justify-between items-center w-full rounded-2xl bg-black/10 px-1 py-1">
        <div className="flex items-center gap-2">
          <div className="rounded-2xl py-0.5 text-[9px] px-2 flex justify-center items-center text-white bg-amber-700">
            업데이트
          </div>
          <div className="text-xs">채팅방에서 조용히 나가기</div>
        </div>
        <div>
          <IoChevronForward className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
