import { MV3PreviewHeader } from "./MV3PreviewHeader";
import { MV3PreviewUpdate } from "./MV3PreviewUpdate";
import { MV3PreviewProfile } from "./MV3PreviewProfile";
import { MV3PreviewFriends } from "./MV3PreviewFriends";
import { MV3PreviewBottom } from "./MV3PreviewBottom";
import { useState } from "react";
import { MV3Editor } from "./MV3Editor";

export interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosTextColor: string;
  iosHighlightedTextColor: string;
  iosDescriptionTextColor: string;
  iosDescriptionHighlightedTextColor: string;
  iosParagraphTextColor: string;
  iosParagraphHighlightedTextColor: string;
  iosNormalBackgroundColor: string;
  iosNormalBackgroundAlpha: number;
  iosSelectedBackgroundColor: string;
  iosSelectedBackgroundAlpha: number;
  SectionTitleBorderColor: string;
  SectionTitleBorderAlpha: number;
  SectionTitleTextColor: string;
  SectionTitleTextAlpha: number;
}

export default function MainViewStyle3() {
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    backgroundColor: "#FFFFFF",
    iosBackgroundImage: "",
    iosTextColor: "#000000",
    iosHighlightedTextColor: "#000000",
    iosDescriptionTextColor: "#000000",
    iosDescriptionHighlightedTextColor: "#000000",
    iosParagraphTextColor: "#000000",
    iosParagraphHighlightedTextColor: "#000000",
    iosNormalBackgroundColor: "#000000",
    iosNormalBackgroundAlpha: 0.09,
    iosSelectedBackgroundColor: "#000000",
    iosSelectedBackgroundAlpha: 0.09,
    SectionTitleBorderColor: "#000000",
    SectionTitleBorderAlpha: 0.09,
    SectionTitleTextColor: "#000000",
    SectionTitleTextAlpha: 1.0,
  });

  const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({
    iosTextColor: true,
    iosDescriptionTextColor: true,
    iosParagraphTextColor: true,
  });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)] text-sm">
      {/* 왼쪽 */}
      <div className="relative flex justify-center items-center min-h-[calc(100vh-36px)]  overflow-auto bg-white border-r-2 border-r-gray-100">
        <div
          className="w-64 xl:w-72 aspect-[9/18.7] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative flex flex-col size-full rounded-2xl border-2 border-white bg-red-100 ">
            <MV3PreviewHeader />
            <MV3PreviewUpdate />
            <MV3PreviewProfile />
            <MV3PreviewFriends />
            <MV3PreviewBottom />
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <MV3Editor
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
