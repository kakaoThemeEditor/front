import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChattingHeader } from "./ChattingHeader";
import { Calendar, ChevronRight } from "lucide-react";
import ChattingList from "./ChttingList";
import { KakaoScreenLayout } from "@/components/common/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { SmallText } from "@/components/common/SmallText";
import { MessageCellStyleType } from "./type";
import MessageStyleTable from "@/components/table/MessageStyleTable";
import { useState } from "react";

export default function Chatting() {
  const [MessageCellStyle, setMessageCellStyle] = useState<MessageCellStyleType>({
    "MessageCellStyle-Send": {
      "-ios-background-image": "",
      "-ios-selected-background-image": "",
      "-ios-title-edgeinsets": "",
      "-ios-group-background-image": "",
      "-ios-group-selected-background-image": "",
      "-ios-group-title-edgeinsets": "",
      "-ios-text-color": "",
      "-ios-selected-text-color": "",
      "-ios-unread-text-color": "",
    },
    "MessageCellStyle-Receive": {
      "-ios-background-image": "",
      "-ios-selected-background-image": "",
      "-ios-title-edgeinsets": "",
      "-ios-group-background-image": "",
      "-ios-group-selected-background-image": "",
      "-ios-group-title-edgeinsets": "",
      "-ios-text-color": "",
      "-ios-selected-text-color": "",
      "-ios-unread-text-color": "",
    },
  });

  return (
    <KakaoScreenLayout
      editor={
        <div className="w-full xl:w-11/12 mx-auto p-6 bg-white overflow-auto ">
          <div className="flex justify-between mb-4">
            <ThemeStyleDropDown />
            <Button size="sm" className="text-xs">
              저장하기
            </Button>
          </div>
          <MessageStyleTable themeValues={MessageCellStyle} setThemeValues={setMessageCellStyle} />
        </div>
      }
      preview={
        <KakaoPhoneFrame>
          <ChattingHeader />
          <div className="flex w-fit mx-auto bg-black/20 text-gray-50 py-1 my-2 px-2 rounded-full ">
            <Calendar className="w-3 h-3" />
            <SmallText>2024년 12월 20일 월요일</SmallText>
            <ChevronRight className="w-3 h-3" />
          </div>
          <ChattingList />
        </KakaoPhoneFrame>
      }
    />
  );
}
