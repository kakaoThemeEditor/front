import clsx from "clsx";
import { ChevronLeftIcon, SearchIcon, MenuIcon } from "lucide-react";
export function ChattingHeader({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "w-full flex items-center justify-between mt-2 px-3 pt-1",
        className
      )}
    >
      <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeftIcon className="w-3 h-3 xl:w-4 xl:h-4" />
      </button>
      <div className="text-xs xl:text-sm font-bold">어피치</div>
      <div className="flex">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <SearchIcon className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <MenuIcon className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
      </div>
    </div>
  );
}
