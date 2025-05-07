import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import MainviewStyle3EditTable from "./MainviewStyle3EditTable";
import { PreviewHeader } from "@/components/kakaoScreens/preview/PreviewHeader";
import { Music, Search, Settings, UserPlus } from "lucide-react";
import { SmallText } from "@/components/text/SmallText";
import { AdButton } from "@/components/kakaoScreens/preview/AdButton";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import { PreviewBottom } from "@/components/kakaoScreens/preview/PreviewBottom";
import CircleButton from "@/components/button/CircleButton";
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useEditorStore } from "@/store/editorStore";
import { APIClient } from "@/api/ApiHandler";
import { MainViewStyleSecondary } from "./type";
import { toast } from "sonner";
export default function MainViewStyle3() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { mvSecondary, setMvSecondary } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(mvSecondary).length === 0) return true;

    return Object.values(mvSecondary).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getMvSecondary } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MainViewStyleSecondary",
      }),
    onSuccess: (data) => {
      const theme: Partial<MainViewStyleSecondary> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MainViewStyleSecondary] = parsed;
      });

      console.log("data.data.styleDataList", data.data.styleDataList);
      setMvSecondary(theme as MainViewStyleSecondary);
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
          MainViewStyle3: Object.entries(mvSecondary).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getMvSecondary();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getMvSecondary();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getMvSecondary();
  }, [currentThemeId]);

  return (
    <KakaoScreenLayout
      editor={
        <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
          <div className="flex justify-between mb-4">
            <ThemeStyleDropDown />
            <Button size="sm" className="text-xs">
              저장하기
            </Button>
          </div>
          <MainviewStyle3EditTable />
        </div>
      }
      preview={
        <KakaoPhoneFrame frameColor={mvSecondary["MainViewStyle-Secondary"]["background-color"]}>
          <CircleButton Number={1} className="absolute -top-1 -left-2" />
          <PreviewHeader
            title="오픈채팅"
            children={[
              <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
              <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <UserPlus className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
              <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <Music className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
              <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
            ]}
          />
          <div className="flex px-2.5 xl:px-3 py-2.5 xl:py-3 gap-1">
            <div className="flex justify-center items-center px-2 xl:px-2.5 py-1 xl:py-1.5 rounded-2xl bg-amber-900">
              <SmallText size="md" className="text-white">
                내 채팅방
              </SmallText>
            </div>
            <div className="flex justify-center items-center px-2 xl:px-2.5  py-1 xl:py-1.5 rounded-2xl border border-gray-400">
              <SmallText size="md" className="">
                서울
              </SmallText>
            </div>
            <div className="flex justify-center items-center px-2 xl:px-2.5  py-1 xl:py-1.5 rounded-2xl border border-gray-400">
              <SmallText size="md" className="">
                경기도
              </SmallText>
            </div>
          </div>
          <AdButton isBorder={false}>광고하기</AdButton>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <PreviewBottom />
        </KakaoPhoneFrame>
      }
    />
  );
}

interface ChatItemProps {
  isActive?: boolean;
  hasNotification?: boolean;
  notificationCount?: number;
  isBorder?: boolean;
}

function ChatItem({ isActive, hasNotification, notificationCount, isBorder }: ChatItemProps) {
  return (
    <div
      className={`flex justify-between w-full px-4 py-2 rounded-lg ${isActive ? "bg-black/10" : ""} ${
        isBorder ? "border-2  border-kakao-blue" : ""
      }`}
    >
      <PreviewProfile
        name="서울 모임임"
        groupNumber="15"
        description="오늘 장보기 목록"
        size="md"
        avartarRounded="rounded-lg"
      />

      <div className="flex flex-col items-end gap-1">
        <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
        {hasNotification && (
          <div className="text-white text-[8px] xl:text-[10px] bg-red-500/70 rounded-full px-1 xl:px-1.5">
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
}
