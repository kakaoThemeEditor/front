import { PlusIcon, GiftIcon } from "lucide-react";
import { IoChevronUp } from "react-icons/io5";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
import { AdButton } from "@/components/common/AdButton";
import { PreviewProfile } from "@/components/common/PreviewProfile";
import { IconButton } from "@/components/common/IconButton";
import { SmallText } from "@/components/common/SmallText";
import { PreviewPung } from "@/components/common/PreviewPung";
import SpeechBubble from "@/components/button/SpeechBubble";
import { MainViewStyle2Theme } from "./type";
export function MV2PreviewFriends({
  className,
  themeValues,
}: {
  className?: string;
  themeValues: MainViewStyle2Theme;
}) {
  return (
    <>
      {/* 펑 */}
      <PreviewPung />
      {/* 광고 */}
      <AdButton
        children1={<SpeechBubble direction="right" children={5} className="absolute -top-3.5 -left-6.5" />}
        borderColor={themeValues["SectionTitleStyle-Main"]["border-color"]}
      >
        광고하기
      </AdButton>
      {/* 생일인 친구 */}
      <div className="px-4 ">
        <SmallText>생일인 친구</SmallText>
      </div>
      {/* 생일인 친구 프로필 pressed*/}
      <div className="px-4 py-2 bg-black/10 mb-2 xl:mb-5">
        <div className="flex justify-between items-center gap-2">
          <PreviewProfile
            name="이름"
            description="오늘 4월30일"
            size="md"
            avartarRounded="rounded-lg"
            nameColor={themeValues["MainViewStyle-Primary"]["-ios-highlighted-text-color"]}
            descriptionColor={themeValues["MainViewStyle-Primary"]["-ios-description-highlighted-text-color"]}
            children={
              <>
                <SpeechBubble direction="bottom" children={2} className="absolute -top-4 left-8.5" />
                <SpeechBubble direction="left" children={3} className="absolute top-3.5 -right-7" />
              </>
            }
          />
          <IconButton
            icon={GiftIcon}
            text="선물하기"
            className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[9px] xl:text-[10px]  px-2 py-1"
          />
        </div>
      </div>
      {/* 즐겨찾기 */}
      <div className="px-4 ">
        <SmallText>즐겨찾기</SmallText>
      </div>
      {/* 즐겨찾기 친구 프로필 */}
      <div className="px-4 py-2  mb-2 xl:mb-5">
        <PreviewProfile name="이름" description="상태메시지" size="md" avartarRounded="rounded-lg" />
      </div>
    </>
  );
}
