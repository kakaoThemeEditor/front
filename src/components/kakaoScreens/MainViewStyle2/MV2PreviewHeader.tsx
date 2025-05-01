import { Search, Settings, UserPlus, Music } from "lucide-react";
import clsx from "clsx";

export function MV2PreviewHeader({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "w-full flex items-center justify-between mt-2 px-3 pt-1",
        className
      )}
    >
      <div className="text-xs xl:text-sm font-bold">친구</div>
      <div className="flex">
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <UserPlus className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <Music className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-3 h-3 xl:w-4 xl:h-4" />
        </button>
      </div>
    </div>
  );
}
