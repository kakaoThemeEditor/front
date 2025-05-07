import { useState } from "react";
import { TabBarHeader } from "./TabBarHeader";
import { TabBarProfile } from "./TabBarProfile";
import { TabBarFriends } from "./TabBarFriends";
import { TabBarBottom } from "./TabBarBottom";
import { TabBarEditor } from "./TabBarEditor";
import { PreviewUpdateAlert } from "@/components/common/PreviewUpdateAlert";
import { KakaoScreenLayout } from "@/components/common/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { ThemeValues, IsActive } from "./type";

export default function TabBar() {
  //prettier-ignore
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    "TabbarStyle-Main": {
      "-ios-background-image": "",
      "background-color": "",
      "-ios-friends-normal-icon-image": "",
      "-ios-friends-selected-icon-image": "",
      "-ios-chats-normal-icon-image": "",
      "-ios-chats-selected-icon-image": "",
      "-ios-openchats-normal-icon-image": "",
      "-ios-openchats-selected-icon-image": "",
      "-ios-shopping-normal-icon-image": "",
      "-ios-shopping-selected-icon-image": "",
      "-ios-more-normal-icon-image": "",
      "-ios-more-selected-icon-image": "",
    },
    "DefaultProfileStyle": {
      "-ios-background-image": "",
    },
    "FeatureStyle-Primary": {
      "-ios-text-color": "",
    },
    "BottomBannerStyle": {
      "background-color": "",
    },
  });

  const [isActive, setIsActive] = useState<IsActive>({
    "TabbarStyle-Main": {
      "-ios-friends-normal-icon-image": true,
      "-ios-chats-normal-icon-image": true,
      "-ios-openchats-normal-icon-image": true,
      "-ios-shopping-normal-icon-image": true,
      "-ios-more-normal-icon-image": true,
    },
  });

  return (
    <KakaoScreenLayout
      editor={
        <TabBarEditor
          themeValues={themeValues}
          setThemeValues={setThemeValues}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      }
      preview={
        <KakaoPhoneFrame>
          <TabBarHeader />
          <PreviewUpdateAlert />
          <TabBarProfile themeValues={themeValues} setThemeValues={setThemeValues} />
          <TabBarFriends themeValues={themeValues} setThemeValues={setThemeValues} />
          <TabBarBottom
            themeValues={themeValues}
            setThemeValues={setThemeValues}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </KakaoPhoneFrame>
      }
    />
  );
}
