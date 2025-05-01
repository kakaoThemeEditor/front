import { useWindowHeight } from "@/hooks/use-window-height";
import { MV2PreviewHeader } from "./MV2PreviewHeader";
import { MV2PreviewUpdate } from "./MV2PreviewUpdate";
import { MV2PreviewProfile } from "./MV2PreviewProfile";
import { MV2PreviewFriends } from "./MV2PreviewFriends";
import { MV2PreviewBottom } from "./MV2PreviewBottom";
import { useState } from "react";
import { MV2Editor } from "./MV2Editor";

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

export default function MainViewStyle2() {
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
            <MV2PreviewHeader />
            <MV2PreviewUpdate />
            <MV2PreviewProfile />
            <MV2PreviewFriends />
            <MV2PreviewBottom />
          </div>
        </div>
      </div>
      {/* 오른쪽 */}
      <MV2Editor
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
