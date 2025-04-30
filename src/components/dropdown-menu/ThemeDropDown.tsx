"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

export function ThemeDropDown() {
  const [theme1, setTheme1] = useState("theme1");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center text-sm hover:bg-gray-100 rounded-md px-2 py-1">
          <span className="font-bold">theme1</span>
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuCheckboxItem checked={theme1 === "theme1"} onCheckedChange={() => setTheme1("theme1")}>
          theme1
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "theme2"} onCheckedChange={() => setTheme1("theme2")}>
          theme2
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme1 === "theme3"} onCheckedChange={() => setTheme1("theme3")}>
          theme3
        </DropdownMenuCheckboxItem>
        <DropdownMenuItem className="text-green-600 hover:text-green-700 hover:bg-green-50 focus:text-green-700 focus:bg-green-50">
          <Plus className="w-4 h-4 " />
          <span>테마 생성</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
