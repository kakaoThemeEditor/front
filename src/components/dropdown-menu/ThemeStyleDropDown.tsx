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
import { useState } from "react";

export function ThemeStyleDropDown() {
  const [theme1, setTheme1] = useState("theme1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span className="font-bold">PassCode</span>
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuCheckboxItem checked={theme1 === "TabBar"} onCheckedChange={() => setTheme1("TabBar")}>
          탭바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "Mainview"} onCheckedChange={() => setTheme1("Mainview")}>
          메인뷰
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "Feature"} onCheckedChange={() => setTheme1("Feature")}>
          기능
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme1 === "DefaultProfile"}
          onCheckedChange={() => setTheme1("DefaultProfile")}
        >
          기본프로필
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "Chat"} onCheckedChange={() => setTheme1("Chat")}>
          채팅
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "Message"} onCheckedChange={() => setTheme1("Message")}>
          메시지
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "Passcode"} onCheckedChange={() => setTheme1("Passcode")}>
          패스코드
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme1 === "MessageNotificationBar"}
          onCheckedChange={() => setTheme1("MessageNotificationBar")}
        >
          메시지알림바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme1 === "DirectShareBar"}
          onCheckedChange={() => setTheme1("DirectShareBar")}
        >
          직접공유바
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme1 === "BottomBannerStyle"}
          onCheckedChange={() => setTheme1("BottomBannerStyle")}
        >
          바텀배너스타일
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
