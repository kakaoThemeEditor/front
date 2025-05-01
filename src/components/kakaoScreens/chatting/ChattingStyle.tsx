import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChattingHeader } from "./ChattingHeader";
import { Calendar, ChevronRight } from "lucide-react";
import ChattingList from "./ChttingList";

export default function ChattingStyle() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)] text-sm">
      {/* 왼쪽 */}
      <div className="relative flex justify-center items-center min-h-[calc(100vh-36px)]  border-r-2 border-r-gray-100 overflow-auto">
        <div
          className="w-64 xl:w-72 aspect-[9/18.7] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div
            className={clsx(
              "h-full w-full flex flex-col items-center rounded-2xl bg-red-100"
            )}
          >
            <ChattingHeader />
            <div className="w-1/2 bg-black/10 text-white py-1 px-1">
              <Calendar />
              <span>2024년 12월 20일 월요일</span>
              <ChevronRight />
            </div>
            <ChattingList />
          </div>
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="w-full xl:w-11/12 mx-auto p-6 bg-white overflow-auto ">
        <div className="flex justify-between mb-4">
          <ThemeStyleDropDown />
          <Button size="sm" className="text-xs">
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
}
