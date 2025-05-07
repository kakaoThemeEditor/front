// ... existing code ...
import { SmallText } from "@/components/text/SmallText";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { Search, Settings, UserPlus, QrCode, Smartphone, Users } from "lucide-react";
import { PreviewHeader } from "@/components/kakaoScreens/preview/PreviewHeader";
import { PreviewBottom } from "@/components/kakaoScreens/preview/PreviewBottom";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import SpeechBubble from "@/components/button/SpeechBubble";
import { AddFriendTable } from "./AddFriendTable";
import { useEffect, useRef, useState } from "react";
import { AddFriendType } from "./type";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useEditorStore } from "@/store/editorStore";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";
export default function AddFriend() {
  const [themeValues, setThemeValues] = useState<AddFriendType>({
    "ButtonStyle-AddFriend": {
      "-ios-image": "",
    },
  });

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(themeValues).length === 0) return true;

    return Object.values(themeValues).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getAddFriend } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MainViewStyle1",
      }),
    onSuccess: (data) => {
      const theme: Partial<AddFriendType> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof AddFriendType] = parsed;
      });
      setThemeValues(theme as AddFriendType);
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
          MainViewStyle1: Object.entries(themeValues).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getAddFriend();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getAddFriend();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getAddFriend();
  }, [currentThemeId]);

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
          <AddFriendTable themeValues={themeValues} setThemeValues={setThemeValues} />
        </div>
      }
      preview={
        <KakaoPhoneFrame>
          <PreviewHeader
            title="친구 찾기"
            children={[
              <button className="p-1.5 transition-colors">
                <Search className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
              <button className="p-1.5 transition-colors">
                <Settings className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>,
            ]}
          />
          <div className="flex justify-between items-center px-3 py-3">
            <div className="flex flex-col items-center gap-0.5">
              <div className="p-3 rounded-md">
                <UserPlus className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
              <SmallText size="md">친구찾기</SmallText>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="p-3  rounded-md">
                <QrCode className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
              <SmallText size="md">QR코드</SmallText>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="p-3  rounded-md">
                <Smartphone className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
              <SmallText size="md">쉐이크</SmallText>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="p-3  rounded-md">
                <Users className="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
              <SmallText size="md">초대</SmallText>
            </div>
          </div>
          <SmallText size="sm" className="px-3 mt-4">
            추천친구
          </SmallText>
          <div className="flex justify-between items-center px-4 py-1">
            <PreviewProfile name="이름" description="오늘 4월30일" size="md" />
            <div className="relative p-2  transition-colors bg-red-50">
              <UserPlus className="w-4 h-4 xl:w-5 xl:h-5" />
              <SpeechBubble direction="right" className="absolute top-2 -left-6">
                1
              </SpeechBubble>
            </div>
          </div>
          <PreviewBottom />
        </KakaoPhoneFrame>
      }
    />
  );
}
