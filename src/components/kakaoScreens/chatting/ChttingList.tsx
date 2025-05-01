import { ArrowUp } from "lucide-react";

export default function ChattingList() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="w-6 h-6 bg-gray-200"></div>
        <div className="flex flex-col">
          <div className="">어피치</div>
          <div className="">어피치어피치한</div>
          <div className="flex">
            <div className="">채팅내용 입력하기도 힘들어</div>
            <div className="items-end">오후 12:03</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end text-xs">
        <div className="flex flex-col items-end">
          <div className="">어피치</div>
          <div className="">어피치어피치한</div>
          <div className="flex">
            <div className="items-end">오후 12:03</div>
            <div className="">채팅내용 입력하기도 힘들어</div>
          </div>
        </div>
      </div>

      <div className="relative flex h-16 xl:h-18 p-3 xl:p-4 justify-between mt-auto rounded-b-2xl bg-white">
        <div className="flex">
          <div className="w-5 h-5 xl:w-6 xl:h-6 bg-gray-200 rounded-full flex items-center justify-center"></div>
          <div className="w-full"></div>
          <div className="w-5 h-5 xl:w-6 xl:h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <ArrowUp className="w-3 h-3 xl:w-4 xl:h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
