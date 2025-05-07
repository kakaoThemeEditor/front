import { MV1Header } from "./MV1Header";
import { MV1ChatList } from "./MV1ChatList";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { AdButton } from "@/components/kakaoScreens/preview/AdButton";
import { PreviewBottom } from "@/components/kakaoScreens/preview/PreviewBottom";
import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import MainviewStyle1EditTable from "@/components/kakaoScreens/MainViewStyle1/MainviewStyle1EditTable";
import { useThemeStore } from "@/store/themeStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { useEditorStore } from "@/store/editorStore";
import { useEffect, useState, useRef } from "react";
import { MainViewStyle1Theme } from "./type";
import { PreviewSkeleton } from "../preview/PreviewSkeleton";
import { toast } from "sonner";
export default function MainviewStyle1() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { mv1Theme, setMv1Theme } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(mv1Theme).length === 0) return true;

    return Object.values(mv1Theme).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getMv1Theme } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MainViewStyle1",
      }),
    onSuccess: (data) => {
      const theme: Partial<MainViewStyle1Theme> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MainViewStyle1Theme] = parsed;
      });
      setMv1Theme(theme as MainViewStyle1Theme);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const { mutate: updateTheme } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/update", {
        themeId: currentThemeId,
        styleTypeMap: {
          MainViewStyle1: Object.entries(mv1Theme).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getMv1Theme();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getMv1Theme();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getMv1Theme();
  }, [currentThemeId]);

  return (
    <KakaoScreenLayout
      editor={
        <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
          <div className="flex justify-between mb-4">
            <ThemeStyleDropDown />
            <Button
              size="sm"
              className="text-xs"
              onClick={() => {
                updateTheme();
              }}
            >
              저장하기
            </Button>
          </div>
          <MainviewStyle1EditTable />
        </div>
      }
      preview={
        <KakaoPhoneFrame>
          {isLoading || isThemeEmpty() ? (
            <PreviewSkeleton />
          ) : (
            <>
              <MV1Header />
              <AdButton isBorder={false}>광고하기</AdButton>
              <MV1ChatList />
              <PreviewBottom />
            </>
          )}
        </KakaoPhoneFrame>
      }
    />
  );
}
