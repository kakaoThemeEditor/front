"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { APIClient } from "@/api/ApiHandler";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronDown, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useEditorStore } from "@/store/editorStore";
import { useNavigate } from "react-router-dom";

export function ThemeDropDown() {
  const queryClient = useQueryClient();
  const { currentThemeId, themeList, setCurrentThemeId } = useEditorStore();
  const [themeName, setThemeName] = useState("");
  const [themeDes, setThemeDes] = useState("");
  const navigate = useNavigate();

  // 현재 선택된 테마의 이름을 설정하는 effect
  useEffect(() => {
    if (currentThemeId && themeList.length > 0) {
      const currentTheme = themeList.find((theme) => theme.themeId === currentThemeId);
      if (currentTheme) {
        setThemeName(currentTheme.themeName);
      }
    }
  }, [currentThemeId, themeList]);

  const createThemeMutation = useMutation({
    mutationFn: (newTheme: { themeName: string; themeDes: string; themeImg: string }) =>
      APIClient.post("/theme/create", newTheme),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setThemeName("");
      setThemeDes("");
    },
    onError: () => {
      console.log("실패");
    },
  });

  const handleCreateTheme = () => {
    if (!themeName.trim()) {
      return;
    }
    createThemeMutation.mutate({
      themeName: themeName.trim(),
      themeDes: themeDes.trim(),
      themeImg: "",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center text-sm hover:bg-gray-100 rounded-md px-2 py-1">
          <span className="font-bold">
            {currentThemeId && themeList.length > 0
              ? themeList.find((theme) => theme.themeId === currentThemeId)?.themeName || "생성하기"
              : "생성하기"}
          </span>
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {themeList.map((theme) => {
          return (
            <DropdownMenuCheckboxItem
              key={theme.themeId}
              checked={theme.themeId === currentThemeId}
              onCheckedChange={() => {
                setCurrentThemeId(theme.themeId);
                setThemeName(theme.themeName);
                navigate(`/editor/kakao/${theme.themeId}/MainViewStyle1`);
              }}
            >
              {theme.themeName}
            </DropdownMenuCheckboxItem>
          );
        })}
        <Dialog>
          <DropdownMenuItem
            className="text-green-600 hover:text-green-700 hover:bg-green-50 focus:text-green-700 focus:bg-green-50"
            onSelect={(e) => e.preventDefault()}
          >
            <DialogTrigger asChild>
              <button className="w-full flex items-center gap-1">
                <Plus className="w-4 h-4" />새 테마 생성
              </button>
            </DialogTrigger>
          </DropdownMenuItem>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>새 테마 생성</DialogTitle>
              <DialogDescription>생성할 테마의 이름을 입력해주세요.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  테마 이름
                </Label>
                <Input
                  id="name"
                  value={themeName}
                  className="col-span-3"
                  onChange={(e) => setThemeName(e.target.value)}
                  placeholder="테마 이름을 입력하세요"
                />
                <Label htmlFor="des" className="text-right">
                  테마 정보
                </Label>
                <Input
                  id="des"
                  value={themeDes}
                  className="col-span-3"
                  onChange={(e) => setThemeDes(e.target.value)}
                  placeholder="테마 정보를 입력하세요"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose
                onClick={() => {
                  handleCreateTheme();
                }}
              >
                <Button disabled={!themeName.trim()}>생성</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
