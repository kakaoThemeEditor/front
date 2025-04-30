import PassCode from "@/components/kakaoScreens/passcode/PassCode";
import TabBar from "@/components/kakaoScreens/tabbar/TabBar";
import MainviewStyle1 from "@/components/kakaoScreens/MainviewStyle1";
import { useEditorStore } from "@/store/editorStore";

export const KakaoEditor = () => {
  const { currentStyle } = useEditorStore();

  const screenMap: { [key: string]: string } = {
    TabBar: "tabbar",
    Mainview: "mainview1",
    Passcode: "passcode",
    // 다른 스타일들도 필요에 따라 추가
  };

  const currentScreen = screenMap[currentStyle] || "passcode";

  function renderMatches(screen: string) {
    switch (screen) {
      case "passcode":
        return <PassCode />;
      case "tabbar":
        return <TabBar />;
      case "mainview1":
        return <MainviewStyle1 />;
      default:
        return null;
    }
  }

  return <>{renderMatches(currentScreen)}</>;
};
