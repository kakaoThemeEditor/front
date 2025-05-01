import PassCode from "@/components/kakaoScreens/passcode/PassCode";
import TabBar from "@/components/kakaoScreens/tabbar/TabBar";
import MainviewStyle1 from "@/components/kakaoScreens/MainviewStyle1";
import MainviewStyle2 from "@/components/kakaoScreens/MainViewStyle2/MainviewStyle2";
import { useEditorStore } from "@/store/editorStore";
import ChattingStyle from "@/components/kakaoScreens/chatting/ChattingStyle";
export const KakaoEditor = () => {
  const { currentStyle } = useEditorStore();

  const screenMap: { [key: string]: string } = {
    TabBar: "TabBar",
    Mainview1: "Mainview1",
    Mainview2: "Mainview2",
    Mainview3: "Mainview3",
    Passcode: "Passcode",
    Chat: "Chat",
    // 다른 스타일들도 필요에 따라 추가
  };

  const currentScreen = screenMap[currentStyle] || "Passcode";

  function renderMatches(screen: string) {
    switch (screen) {
      case "Passcode":
        return <PassCode />;
      case "TabBar":
        return <TabBar />;
      case "Mainview1":
        return <MainviewStyle1 />;
      case "Mainview2":
        return <MainviewStyle2 />;
      case "Mainview3":
        return <MainviewStyle2 />;
      case "Chat":
        return <ChattingStyle />;
      default:
        return null;
    }
  }

  return <>{renderMatches(currentScreen)}</>;
};
