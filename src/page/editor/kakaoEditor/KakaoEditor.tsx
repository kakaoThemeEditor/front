import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoChevronBack, IoSearch, IoMenu } from "react-icons/io5";
import Chatting from "@/components/kakaoScreens/Chatting";
type EditableArea = {
  id: string;
  name: string;
  color: string;
  description: string;
};

export const KakaoEditor = () => {
  const [screen, setScreen] = useState<string>("chatting");

  function renderMatches(screen: string) {
    switch (screen) {
      case "chatting":
        return <Chatting />;
      default:
        return null;
    }
  }

  return <>{renderMatches(screen)}</>;
};
