import { useState } from "react";
import { MV1Header } from "./MV1Header";
import { MV1ChatList } from "./MV1ChatList";
import { MV1Editor } from "./MV1Editor";
import { KakaoScreenLayout } from "@/components/common/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { AdButton } from "@/components/common/AdButton";
import { MainViewStyle1Theme } from "./type";
import { PreviewBottom } from "@/components/common/PreviewBottom";

export default function MainviewStyle1() {
  const [themeValues, setThemeValues] = useState<MainViewStyle1Theme>({
    "HeaderStyle-Main": {
      "-ios-text-color": "",
    },
    "MainViewStyle-Primary": {
      "-ios-paragraph-text-color": "",
      "-ios-paragraph-highlighted-text-color": "",
      "-ios-normal-background-color": "",
      "-ios-normal-background-alpha": "",
      "-ios-selected-background-color": "",
      "-ios-selected-background-alpha": "",
    },
  });

  return (
    <KakaoScreenLayout
      editor={<MV1Editor themeValues={themeValues} setThemeValues={setThemeValues} />}
      preview={
        <KakaoPhoneFrame>
          <MV1Header themeValues={themeValues} />
          <AdButton>광고하기</AdButton>
          <MV1ChatList themeValues={themeValues} />
          <PreviewBottom />
        </KakaoPhoneFrame>
      }
    />
  );
}
