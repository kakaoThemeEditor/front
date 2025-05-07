"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";
import { useNavigate } from "react-router-dom";
export function ThemeStyleDropDown() {
  const { currentStyle, setCurrentStyle, currentThemeId } = useEditorStore();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <span className="font-bold text-xs">{currentStyle}</span>
          <ChevronDown
            className="-me-1 ms-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "Mainview1"}
          onCheckedChange={() => {
            setCurrentStyle("Mainview1");
            navigate(`/editor/kakao/${currentThemeId}/MainViewStyle1`);
          }}
        >
          메인뷰1
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "Mainview2"}
          onCheckedChange={() => {
            setCurrentStyle("Mainview2");
            navigate(`/editor/kakao/${currentThemeId}/MainViewStyle2`);
          }}
        >
          메인뷰2
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "Mainview3"}
          onCheckedChange={() => {
            setCurrentStyle("Mainview3");
            navigate(`/editor/kakao/${currentThemeId}/MainViewStyle3`);
          }}
        >
          메인뷰3
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "TabBar"}
          onCheckedChange={() => {
            setCurrentStyle("TabBar");
            navigate(`/editor/kakao/${currentThemeId}/TabBar`);
          }}
        >
          탭바
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "Chat"}
          onCheckedChange={() => {
            setCurrentStyle("Chat");
            navigate(`/editor/kakao/${currentThemeId}/Chatting`);
          }}
        >
          채팅
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "Passcode"}
          onCheckedChange={() => {
            setCurrentStyle("Passcode");
            navigate(`/editor/kakao/${currentThemeId}/PassCode`);
          }}
        >
          패스코드
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "MessageNotificationBar"}
          onCheckedChange={() => {
            setCurrentStyle("MessageNotificationBar");
            navigate(`/editor/kakao/${currentThemeId}/MessageNotificationBar`);
          }}
        >
          메시지알림바
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          className="text-xs"
          checked={currentStyle === "AddFriend"}
          onCheckedChange={() => {
            setCurrentStyle("AddFriend");
            navigate(`/editor/kakao/${currentThemeId}/AddFriend`);
          }}
        >
          친구추가
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
