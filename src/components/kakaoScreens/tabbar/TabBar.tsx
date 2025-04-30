import { useState } from "react";
import { TabBarHeader } from "./TabBarHeader";
import { TabBarUpdate } from "./TabBarUpdate";
import { TabBarProfile } from "./TabBarProfile";
import { TabBarFriends } from "./TabBarFriends";
import { TabBarBottom } from "./TabBarBottom";
import { TabBarEditor } from "./TabBarEditor";
import MaintabBgImage from "../../../assets/Images/maintabBgImage@2x.png";

export interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosFriendsNormalIconImage: string;
  iosFriendsSelectedIconImage: string;
  iosChatsNormalIconImage: string;
  iosChatsSelectedIconImage: string;
  iosOpenchatsNormalIconImage: string;
  iosOpenchatsSelectedIconImage: string;
  iosShoppingNormalIconImage: string;
  iosShoppingSelectedIconImage: string;
  iosMoreNormalIconImage: string;
  iosMoreSelectedIconImage: string;
}

export default function TabBar() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    backgroundColor: "#FFFFFF",
    iosBackgroundImage: "",
    iosFriendsNormalIconImage: "",
    iosFriendsSelectedIconImage: "",
    iosChatsNormalIconImage: "",
    iosChatsSelectedIconImage: "",
    iosOpenchatsNormalIconImage: "",
    iosOpenchatsSelectedIconImage: "",
    iosShoppingNormalIconImage: "",
    iosShoppingSelectedIconImage: "",
    iosMoreNormalIconImage: "",
    iosMoreSelectedIconImage: "",
  });

  const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({
    iosFriendsNormalIconImage: true,
    iosChatsNormalIconImage: true,
    iosOpenchatsNormalIconImage: true,
    iosShoppingNormalIconImage: true,
    iosMoreNormalIconImage: true,
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)] text-sm">
      {/* 왼쪽 */}
      <div className="relative flex justify-center items-center min-h-[calc(100vh-36px)]">
        <div
          className="w-72 xl:w-80 aspect-[9/18.7] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative flex flex-col size-full rounded-2xl border-2 border-white bg-red-100">
            <TabBarHeader />
            <TabBarUpdate />
            <TabBarProfile />
            <TabBarFriends />
            <TabBarBottom
              themeValues={themeValues}
              setThemeValues={setThemeValues}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <TabBarEditor
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
