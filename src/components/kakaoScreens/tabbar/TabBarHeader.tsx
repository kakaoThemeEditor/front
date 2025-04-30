import { Search, Settings, UserPlus, Music } from "lucide-react";
import clsx from "clsx";

export function TabBarHeader({ className }: { className?: string }) {
  return (
    <div className={clsx("w-full flex justify-between mt-2 px-4 pt-4", className)}>
      <div className="text-base font-bold">친구</div>
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <UserPlus className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Music className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
