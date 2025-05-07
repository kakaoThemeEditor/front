import { PlusIcon, GiftIcon } from "lucide-react";
import { IoChevronUp } from "react-icons/io5";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
import { AdButton } from "@/components/common/AdButton";
import { SmallText } from "@/components/common/SmallText";
import { PreviewProfile } from "@/components/common/PreviewProfile";
import { IconButton } from "@/components/common/IconButton";
import SpeechBubble from "@/components/button/SpeechBubble";
import { ThemeValues } from "./type";
import { PreviewPung } from "@/components/common/PreviewPung";

export function TabBarFriends({
  className,
  themeValues,
  setThemeValues,
}: {
  className?: string;
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
}) {
  return (
    <>
      {/* 펑 */}
      <PreviewPung />

      {/* 광고 */}
      <AdButton>광고하기</AdButton>

      {/* 생일인 친구 */}
      <SmallText className="px-4">생일인 친구</SmallText>
      {/* 생일인 친구 프로필 */}
      <div className="px-4 py-2 bg-black/10 mb-2 xl:mb-4">
        <div className="flex justify-between items-center gap-2">
          <PreviewProfile imageUrl={ProfileImg01} name="이름" size="md" description="오늘 4월30일" />

          <IconButton
            icon={GiftIcon}
            text="선물하기"
            size="sm"
            children={
              <SpeechBubble
                direction="bottom"
                children={8}
                className="absolute -top-4 left-1 transform translate-x-1/2"
              />
            }
            textColor={themeValues["FeatureStyle-Primary"]["-ios-text-color"]}
          />
        </div>
      </div>
      {/* 즐겨찾기 */}
      <SmallText className="px-4">즐겨찾기</SmallText>
      {/* 즐겨찾기 친구 프로필 */}
      <div className="px-4 py-2 mb-2 xl:mb-4">
        <div className="flex justify-between items-center gap-2">
          <PreviewProfile imageUrl={ProfileImg01} name="은우" size="md" description="상태메시지" />
        </div>
      </div>
    </>
  );
}
