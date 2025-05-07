import { MV2PreviewProfile } from "./MV2PreviewProfile";
import { MV2PreviewFriends } from "./MV2PreviewFriends";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { PreviewUpdateAlert } from "@/components/kakaoScreens/preview/PreviewUpdateAlert";
import { PreviewBottom } from "@/components/kakaoScreens/preview/PreviewBottom";
import { useThemeStore } from "@/store/themeStore";
import { PreviewHeader } from "@/components/kakaoScreens/preview/PreviewHeader";
import CircleButton from "@/components/button/CircleButton";
import { Search } from "lucide-react";
import { UserPlus } from "lucide-react";
import { Music, Settings } from "lucide-react";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { MV2EditorTable } from "./MV2EditorTable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { useEditorStore } from "@/store/editorStore";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { MainViewStyle2Theme } from "./type";
import { base64ToFile } from "@/utils/utils";

export default function MainViewStyle2() {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { mv2Theme, setMv2Theme } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(mv2Theme).length === 0) return true;

    return Object.values(mv2Theme).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getMv2Theme } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MainViewStyle2",
      }),
    onSuccess: (data) => {
      const theme: Partial<MainViewStyle2Theme> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MainViewStyle2Theme] = parsed;
      });
      setMv2Theme(theme as MainViewStyle2Theme);
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
          MainViewStyle2: Object.entries(mv2Theme).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getMv2Theme();
    },
  });

  const { mutate: uploadImage } = useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      return APIClient.post("/theme/upload-image", formData);
    },
    onSuccess: () => {
      toast.success("이미지 업로드 완료");
    },
    onError: () => {
      toast.error("이미지 업로드 실패");
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getMv2Theme();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getMv2Theme();
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
                uploadImage(base64ToFile(mv2Theme["MainViewStyle-Primary"]["-ios-background-image"]));
              }}
            >
              저장하기
            </Button>{" "}
          </div>
          <MV2EditorTable />
        </div>
      }
      preview={
        <KakaoPhoneFrame
          frameColor={mv2Theme["MainViewStyle-Primary"]["background-color"]}
          frameImage={mv2Theme["MainViewStyle-Primary"]["-ios-background-image"]}
        >
          <CircleButton Number={1} className="absolute -top-2.5 xl:-top-2.5 -left-3" />
          <PreviewHeader
            title="친구"
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
          <PreviewUpdateAlert />
          <MV2PreviewProfile />
          <MV2PreviewFriends />
          <PreviewBottom />
        </KakaoPhoneFrame>
      }
    />
  );
}
