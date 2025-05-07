import { MV2PreviewHeader } from "./MV2PreviewHeader";
import { MV2PreviewProfile } from "./MV2PreviewProfile";
import { MV2PreviewFriends } from "./MV2PreviewFriends";
import { useState } from "react";
import { MV2Editor } from "./MV2Editor";
import { KakaoScreenLayout } from "@/components/common/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { PreviewUpdateAlert } from "@/components/common/PreviewUpdateAlert";
import { PreviewBottom } from "@/components/common/PreviewBottom";
import { MainViewStyle2Theme } from "./type";

export default function MainViewStyle2() {
  const [themeValues, setThemeValues] = useState<MainViewStyle2Theme>({
    "MainViewStyle-Primary": {
      "background-color": "",
      "-ios-background-image": "",
      "-ios-text-color": "",
      "-ios-highlighted-text-color": "",
      "-ios-description-text-color": "",
      "-ios-description-highlighted-text-color": "",
    },
    "SectionTitleStyle-Main": {
      "border-color": "",
      "border-alpha": 0,
      "-ios-text-color": "",
      "-ios-text-alpha": 0,
    },
  });

  const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({
    iosTextColor: true,
    iosDescriptionTextColor: true,
    iosParagraphTextColor: true,
  });

  return (
    <KakaoScreenLayout
      editor={
        <MV2Editor
          themeValues={themeValues}
          setThemeValues={setThemeValues}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      }
      preview={
        <KakaoPhoneFrame
          frameColor={themeValues["MainViewStyle-Primary"]["background-color"]}
          frameImage={themeValues["MainViewStyle-Primary"]["-ios-background-image"]}
        >
          <MV2PreviewHeader />
          <PreviewUpdateAlert />
          <MV2PreviewProfile themeValues={themeValues} />
          <MV2PreviewFriends themeValues={themeValues} />
          <PreviewBottom />
        </KakaoPhoneFrame>
      }
    />
  );
}
