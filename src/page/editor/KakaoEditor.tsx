import { useState } from "react";
import Chatting from "@/components/kakaoScreens/Chatting";
import PassCode from "@/components/kakaoScreens/PassCode";
import TabBar from "@/components/kakaoScreens/TabBar";
import MainviewStyle1 from "@/components/kakaoScreens/MainviewStyle1";
export const KakaoEditor = () => {
  const [screen, setScreen] = useState<string>("passcode");

  function renderMatches(screen: string) {
    switch (screen) {
      case "chatting":
        return <Chatting />;
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

  return <>{renderMatches(screen)}</>;
};
