"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";

export function ThemeStyleDropDown() {
  const { currentStyle, setCurrentStyle } = useEditorStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span className="font-bold">{currentStyle}</span>
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuCheckboxItem checked={currentStyle === "TabBar"} onCheckedChange={() => setCurrentStyle("TabBar")}>
          탭바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "Mainview"}
          onCheckedChange={() => setCurrentStyle("Mainview")}
        >
          메인뷰
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "Feature"}
          onCheckedChange={() => setCurrentStyle("Feature")}
        >
          기능
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "DefaultProfile"}
          onCheckedChange={() => setCurrentStyle("DefaultProfile")}
        >
          기본프로필
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={currentStyle === "Chat"} onCheckedChange={() => setCurrentStyle("Chat")}>
          채팅
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "Message"}
          onCheckedChange={() => setCurrentStyle("Message")}
        >
          메시지
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "Passcode"}
          onCheckedChange={() => setCurrentStyle("Passcode")}
        >
          패스코드
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "MessageNotificationBar"}
          onCheckedChange={() => setCurrentStyle("MessageNotificationBar")}
        >
          메시지알림바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "DirectShareBar"}
          onCheckedChange={() => setCurrentStyle("DirectShareBar")}
        >
          직접공유바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={currentStyle === "BottomBannerStyle"}
          onCheckedChange={() => setCurrentStyle("BottomBannerStyle")}
        >
          바텀배너스타일
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
