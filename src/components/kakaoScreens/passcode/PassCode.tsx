import { useState } from "react";
import { PassCodePreview } from "./PassCodePreview";
import { PassCodeEditor } from "./PassCodeEditor";

export interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosTextColor: string;
  iosBulletFirstImage: string;
  iosBulletSecondImage: string;
  iosBulletThirdImage: string;
  iosBulletFourthImage: string;
  iosBulletSelectedFirstImage: string;
  iosBulletSelectedSecondImage: string;
  iosBulletSelectedThirdImage: string;
  iosBulletSelectedFourthImage: string;
  iosKeypadBackgroundColor: string;
  iosKeypadTextNormalColor: string;
  iosKeypadNumberHighlightedImage: string;
}

export default function PassCode() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    backgroundColor: "",
    iosBackgroundImage: "",
    iosTextColor: "",
    iosBulletFirstImage: "",
    iosBulletSecondImage: "",
    iosBulletThirdImage: "",
    iosBulletFourthImage: "",
    iosBulletSelectedFirstImage: "",
    iosBulletSelectedSecondImage: "",
    iosBulletSelectedThirdImage: "",
    iosBulletSelectedFourthImage: "",
    iosKeypadBackgroundColor: "",
    iosKeypadTextNormalColor: "",
    iosKeypadNumberHighlightedImage: "",
  });

  const [activeSelected, setActiveSelected] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)]">
      <PassCodePreview themeValues={themeValues} activeSelected={activeSelected} />
      <PassCodeEditor
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        activeSelected={activeSelected}
        setActiveSelected={setActiveSelected}
      />
    </div>
  );
}
