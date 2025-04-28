import { useState } from "react";
import Chatting from "@/components/kakaoScreens/Chatting";
import PassCode from "@/components/kakaoScreens/PassCode";

export const KakaoEditor = () => {
  const [screen, setScreen] = useState<string>("passcode");

  function renderMatches(screen: string) {
    switch (screen) {
      case "chatting":
        return <Chatting />;
      case "passcode":
        return <PassCode />;
      default:
        return null;
    }
  }

  return <>{renderMatches(screen)}</>;
};
