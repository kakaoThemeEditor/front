import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import { IoChevronUp } from "react-icons/io5";

export function PreviewPung() {
  return (
    <>
      <div className={clsx("flex justify-between text-xs px-4 py-1.5")}>
        <div className="text-[10px] xl:text-xs">펑</div>
        <IoChevronUp className="w-2 h-2 xl:w-3 xl:h-3" />
      </div>

      <div className="flex px-4 items-center gap-2">
        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-2xl bg-red-200/80 flex justify-center items-center">
          <PlusIcon className="w-3 h-3 xl:w-4 xl:h-4 text-gray-600" />
        </div>
        <div className="text-[8px] xl:text-xs">나의 펑을 생성해보세요!</div>
      </div>
    </>
  );
}
