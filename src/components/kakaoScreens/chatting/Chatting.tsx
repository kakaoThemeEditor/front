import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { ChattingHeader } from "./ChattingHeader";
import { Calendar, ChevronRight } from "lucide-react";
import ChattingList from "./ChttingList";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { SmallText } from "@/components/text/SmallText";
import { isActiveType, MessageCellStyleType } from "./type";
import ChattingTable from "@/components/kakaoScreens/chatting/ChattingTable";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useThemeStore } from "@/store/themeStore";
import { useEditorStore } from "@/store/editorStore";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";

export default function Chatting() {
  const [isActive, setIsActive] = useState<isActiveType>({
    "MessageCellStyle-Send": {
      "-ios-background-image": true,
      "-ios-group-background-image": true,
      "-ios-text-color": true,
    },
    "MessageCellStyle-Receive": {
      "-ios-background-image": true,
      "-ios-group-background-image": true,
      "-ios-text-color": true,
    },
  });

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { messageCell, setMessageCell } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  const isThemeEmpty = () => {
    if (Object.keys(messageCell).length === 0) return true;

    return Object.values(messageCell).every((style) => Object.values(style).every((value) => value === ""));
  };

  const { mutate: getMessageCell } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MessageCellStyle",
      }),
    onSuccess: (data) => {
      const theme: Partial<MessageCellStyleType> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MessageCellStyleType] = parsed;
      });
      setMessageCell(theme as MessageCellStyleType);
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
          MainViewStyle1: Object.entries(messageCell).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getMessageCell();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getMessageCell();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getMessageCell();
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
          <ChattingTable isActive={isActive} setIsActive={setIsActive} />
        </div>
      }
      preview={
        <KakaoPhoneFrame>
          <ChattingHeader />
          <div className="flex w-fit mx-auto bg-black/20 text-gray-50 py-1 my-2 px-2 rounded-full ">
            <Calendar className="w-3 h-3" />
            <SmallText>2024년 12월 20일 월요일</SmallText>
            <ChevronRight className="w-3 h-3" />
          </div>
          <ChattingList isActive={isActive} />
        </KakaoPhoneFrame>
      }
    />
  );
}
