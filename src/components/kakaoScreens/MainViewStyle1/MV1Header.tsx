import { Search, Settings } from "lucide-react";
import SpeechBubble from "@/components/button/SpeechBubble";
import clsx from "clsx";
import { MessageCirclePlus } from "@/components/icons/MessageCirclePlus";
import { MainViewStyle1Theme } from "./type";

export function MV1Header({ themeValues }: { themeValues: MainViewStyle1Theme }) {
  return (
    <div className={clsx("w-full flex items-center justify-between mt-2 px-3 pt-1")}>
      <div
        className="relative text-xs xl:text-sm font-bold"
        style={{ color: themeValues["HeaderStyle-Main"]["-ios-text-color"] }}
      >
        채팅
        <SpeechBubble direction="bottom" className="absolute -top-4.5 right-0">
          1
        </SpeechBubble>
      </div>
      <div className="flex">
        <button className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <Search
            className="w-3 h-3 xl:w-4 xl:h-4"
            style={{ color: themeValues["HeaderStyle-Main"]["-ios-text-color"] }}
          />
          <SpeechBubble direction="bottom" className="absolute -top-3.5 right-0">
            1
          </SpeechBubble>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <MessageCirclePlus
            className="w-3 h-3 xl:w-3.5 xl:h-3.5"
            color={themeValues["HeaderStyle-Main"]["-ios-text-color"]}
          />
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
          <Settings
            className="w-3 h-3 xl:w-4 xl:h-4"
            style={{ color: themeValues["HeaderStyle-Main"]["-ios-text-color"] }}
          />
        </button>
      </div>
    </div>
  );
}
