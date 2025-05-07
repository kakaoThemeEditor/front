import { useState } from "react";
import { PassCodePreview } from "./PassCodePreview";
import { PassCodeEditor } from "./PassCodeEditor";
import { KakaoScreenLayout } from "@/components/common/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { ThemeValues } from "./type";

export default function PassCode() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    "BackgroundStyle-Passcode": {
      "background-color": "",
      "-ios-background-image": "",
    },
    "LabelStyle-PasscodeTitle": {
      "-ios-text-color": "",
    },
    "BulletStyle-Passcode": {
      "-ios-bullet-first-image": "",
      "-ios-bullet-second-image": "",
      "-ios-bullet-third-image": "",
      "-ios-bullet-fourth-image": "",
      "-ios-bullet-selected-first-image": "",
      "-ios-bullet-selected-second-image": "",
      "-ios-bullet-selected-third-image": "",
      "-ios-bullet-selected-fourth-image": "",
      "-ios-keypad-background-color": "",
      "-ios-keypad-text-normal-color": "",
      "-ios-keypad-number-highlighted-image": "",
    },
  });

  const [activeSelected, setActiveSelected] = useState<boolean>(false);

  return (
    <>
      <KakaoScreenLayout
        editor={
          <PassCodeEditor
            themeValues={themeValues}
            setThemeValues={setThemeValues}
            activeSelected={activeSelected}
            setActiveSelected={setActiveSelected}
          />
        }
        preview={<PassCodePreview themeValues={themeValues} activeSelected={activeSelected} />}
      />
    </>
  );
}
