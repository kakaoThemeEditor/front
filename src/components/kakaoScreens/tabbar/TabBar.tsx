import { TabBarProfile } from "./TabBarProfile";
import { TabBarFriends } from "./TabBarFriends";
import { TabBarBottom } from "./TabBarBottom";
import { PreviewUpdateAlert } from "@/components/kakaoScreens/preview/PreviewUpdateAlert";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { useEffect, useRef, useState } from "react";
import { IsActive, TabbarTheme } from "./type";
import { PreviewHeader } from "@/components/kakaoScreens/preview/PreviewHeader";
import { Search } from "lucide-react";
import { Music, Settings } from "lucide-react";
import { UserPlus } from "lucide-react";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { TabBarEditTable } from "./TabBarEditTable";
import { useMutation } from "@tanstack/react-query";
import { useEditorStore } from "@/store/editorStore";
import { useThemeStore } from "@/store/themeStore";
import { useQueryClient } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { MainViewStyleSecondary } from "../MainViewStyle3/type";
import { toast } from "sonner";

export default function TabBar() {
  const [isActive, setIsActive] = useState<IsActive>({
    "TabbarStyle-Main": {
      "-ios-friends-normal-icon-image": true,
      "-ios-chats-normal-icon-image": true,
      "-ios-openchats-normal-icon-image": true,
      "-ios-shopping-normal-icon-image": true,
      "-ios-more-normal-icon-image": true,
    },
  });

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { tabbar, setTabbar } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(tabbar).length === 0) return true;

    return Object.values(tabbar).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getTabbar } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "Tabbar",
      }),
    onSuccess: (data) => {
      const theme: Partial<MainViewStyleSecondary> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MainViewStyleSecondary] = parsed;
      });

      console.log("data.data.styleDataList", data.data.styleDataList);
      setTabbar(theme as TabbarTheme);
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
          Tabbar: Object.entries(tabbar).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getTabbar();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getTabbar();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getTabbar();
  }, [currentThemeId]);

  return (
    <KakaoScreenLayout
      editor={
        <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
          <div className="flex justify-between mb-4 w-full">
            <ThemeStyleDropDown />
            <Button size="sm" className="text-xs">
              저장하기
            </Button>
          </div>
          <TabBarEditTable isActive={isActive} setIsActive={setIsActive} />
        </div>
      }
      preview={
        <KakaoPhoneFrame>
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
          <TabBarProfile />
          <TabBarFriends />
          <TabBarBottom isActive={isActive} />
        </KakaoPhoneFrame>
      }
    />
  );
}
