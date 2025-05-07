import CircleButton from "@/components/button/CircleButton";
import SpeechBubble from "@/components/button/SpeechBubble";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { Annoyed, ArrowUp, Plus } from "lucide-react";
import MessageNotificationEditTable from "./messageNotificationEditTable";
import { useEffect, useRef, useState } from "react";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import { useThemeStore } from "@/store/themeStore";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useEditorStore } from "@/store/editorStore";
import { APIClient } from "@/api/ApiHandler";
import { MessageNotificationBarType } from "./type";
import { toast } from "sonner";
export default function MessageNotificationBar() {
  const [isActive, setIsActive] = useState(true);

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { messageNotification, setMessageNotification } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  // const isThemeEmpty = () => {
  //   if (Object.keys(messageNotification).length === 0) return true;
  //   return Object.values(messageNotification).every((style) => Object.values(style).every((value) => value === ""));
  // };

  const { mutate: getMessageNotification } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "MessageNotificationBar",
      }),
    onSuccess: (data) => {
      const theme: Partial<MessageNotificationBarType> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof MessageNotificationBarType] = parsed;
      });

      console.log("data.data.styleDataList", data.data.styleDataList);
      setMessageNotification(theme as MessageNotificationBarType);
      setIsLoading(false);
    },
    onError: () => {
      console.log("에러 발생");
      setIsLoading(false);
    },
  });

  const { mutate: updateTheme } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/update", {
        themeId: currentThemeId,
        styleTypeMap: {
          Tabbar: Object.entries(messageNotification).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      updateTheme();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getMessageNotification();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getMessageNotification();
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
          <MessageNotificationEditTable isActive={isActive} setIsActive={setIsActive} />
        </div>
      }
      preview={
        <KakaoPhoneFrame frameColor={messageNotification["BackgroundStyle-ChatRoom"]["background-color"]}>
          <CircleButton Number={1} className="absolute top-12 xl:top-14 left-1 xl:left-2" />
          {isActive ? (
            <ChatItem
              backgroundColor={messageNotification["BackgroundStyle-MessageNotificationBar"]["background-color"]}
              nameTextColor={messageNotification["LabelStyle-MessageNotificationBarName"]["-ios-text-color"]}
              messageTextColor={messageNotification["LabelStyle-MessageNotificationBarMessage"]["-ios-text-color"]}
            />
          ) : (
            <NotificationItem
              backgroundColor={messageNotification["BackgroundStyle-DirectShareBar"]["background-color"]}
              nameTextColor={messageNotification["LabelStyle-DirectShareBarName"]["-ios-text-color"]}
              messageTextColor={messageNotification["LabelStyle-DirectShareBarMessage"]["-ios-text-color"]}
            />
          )}
          <ChatInput placeholder="카카오톡 테마" />
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
  backgroundColor?: string;
  nameTextColor?: string;
  messageTextColor?: string;
}

function ChatItem({
  isActive,
  isBorder,
  backgroundColor = "#FCC6C6",
  nameTextColor = "#B35959",
  messageTextColor = "#DC9398",
}: ChatItemProps) {
  return (
    <div
      className={`z-500 relative w-full px-4 pt-2 pb-1 rounded-t-lg bg-black/10 ${
        isBorder ? "border-2  border-kakao-blue" : ""
      }`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <CircleButton Number={2} className="absolute top-1/2 transform -translate-y-1/2 right-2" />
      <PreviewProfile
        name="어피치"
        description="ㅋㅋㅋㅋㅋㅋㅋ"
        nameColor={nameTextColor}
        descriptionColor={messageTextColor}
        size="md"
        avartarRounded="rounded-lg"
        children={
          <>
            <SpeechBubble direction="left" className="absolute top-0 left-18 xl:left-20">
              3
            </SpeechBubble>
            <SpeechBubble direction="left" className="absolute top-3 xl:top-4 left-25 xl:left-29">
              4
            </SpeechBubble>
          </>
        }
      />
      <div className="flex justify-center items-center">
        <div className="w-7 mt-0.5 border border-gray-500/50"></div>
      </div>
    </div>
  );
}

function NotificationItem({ isActive, isBorder, backgroundColor, nameTextColor, messageTextColor }: ChatItemProps) {
  return (
    <div
      className={`z-500 relative w-full px-4 pt-2 pb-1 rounded-t-lg bg-white ${
        isBorder ? "border-2  border-kakao-blue" : ""
      }`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <CircleButton Number={5} className="absolute top-1/2 transform -translate-y-1/2 right-2" />
      <div className="relative flex items-center gap-2 ">
        <div className={`w-7 h-7 xl:w-8 xl:h-8 rounded-lg border border-black/10`}>
          <img src={ProfileImg01} alt={"기본 이미지"} className={`size-full object-cover rounded-lg`} />
        </div>
        <div className="flex flex-col">
          <div className="flex ">
            <span className={`text-[10px] xl:text-xs `} style={{ color: `${nameTextColor}` }}>
              어피치
            </span>
            <span className={`text-[10px] xl:text-xs `} style={{ color: `${messageTextColor}` }}>
              에게 사진을 전송했습니다.
            </span>
          </div>
        </div>
        <SpeechBubble direction="bottom" className="absolute -top-2 xl:-top-2 left-11 xl:left-12">
          6
        </SpeechBubble>
        <SpeechBubble direction="bottom" className="absolute -top-2 xl:-top-2 left-24 xl:left-28">
          7
        </SpeechBubble>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-7 mt-0.5 border border-gray-500/50"></div>
      </div>
    </div>
  );
}

const ChatInput = ({ placeholder }: { placeholder?: string }) => (
  <div className="flex gap-1.5 mt-auto py-2 px-2">
    <div className="flex justify-center items-center w-5 h-5 xl:w-6 xl:h-6 bg-gray-300/40 rounded-full">
      <Plus className="w-3 h-3 xl:w-4 xl:h-4 text-red-500/80" />
    </div>
    <div className="relative flex-1 h-5 xl:h-6 bg-gray-300/40 rounded-full flex items-center px-2 justify-start text-[9px] xl:text-[10px]">
      {placeholder}
      <div className="absolute right-1 top-0 bottom-0 flex items-center justify-center">
        <Annoyed className="w-3 h-3 xl:w-4 xl:h-4" />
      </div>
    </div>
    <div className="flex justify-center items-center w-5 h-5 xl:w-6 xl:h-6 bg-red-500/60 rounded-full">
      <ArrowUp className="w-3 h-3 xl:w-4 xl:h-4 text-white" />
    </div>
  </div>
);
