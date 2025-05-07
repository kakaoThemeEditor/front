import { GiftIcon } from "lucide-react";
import { AdButton } from "@/components/kakaoScreens/preview/AdButton";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import { IconButton } from "@/components/button/IconButton";
import { SmallText } from "@/components/text/SmallText";
import { PreviewPung } from "@/components/kakaoScreens/preview/PreviewPung";
import SpeechBubble from "@/components/button/SpeechBubble";
import { useThemeStore } from "@/store/themeStore";
export function MV2PreviewFriends() {
  const { mv2Theme } = useThemeStore();
  return (
    <>
      {/* 펑 */}
      <PreviewPung
        color={mv2Theme["SectionTitleStyle-Main"]["-ios-text-color"]}
        alpha={mv2Theme["SectionTitleStyle-Main"]["-ios-text-alpha"]}
      />
      {/* 광고 */}
      <AdButton
        children1={<SpeechBubble direction="right" children={5} className="absolute -top-3.5 -left-6.5" />}
        borderColor={mv2Theme["SectionTitleStyle-Main"]["border-color"]}
      >
        광고하기
      </AdButton>
      {/* 생일인 친구 */}
      <div className="px-4 ">
        <SmallText
          color={mv2Theme["SectionTitleStyle-Main"]["-ios-text-color"]}
          alpha={mv2Theme["SectionTitleStyle-Main"]["-ios-text-alpha"]}
        >
          생일인 친구
        </SmallText>
      </div>
      {/* 생일인 친구 프로필 pressed*/}
      <div className="px-4 py-2 bg-black/10 mb-1 xl:mb-2">
        <div className="flex justify-between items-center gap-2">
          <PreviewProfile
            name="이름"
            description="오늘 4월30일"
            size="md"
            avartarRounded="rounded-lg"
            nameColor={mv2Theme["MainViewStyle-Primary"]["-ios-highlighted-text-color"]}
            descriptionColor={mv2Theme["MainViewStyle-Primary"]["-ios-description-highlighted-text-color"]}
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
        <SmallText
          color={mv2Theme["SectionTitleStyle-Main"]["-ios-text-color"]}
          alpha={mv2Theme["SectionTitleStyle-Main"]["-ios-text-alpha"]}
        >
          즐겨찾기
        </SmallText>
      </div>
      {/* 즐겨찾기 친구 프로필 */}
      <div className="px-4 py-2  ">
        <PreviewProfile
          name="이름"
          description="상태메시지"
          size="md"
          avartarRounded="rounded-lg"
          nameColor={mv2Theme["MainViewStyle-Primary"]["-ios-text-color"]}
          descriptionColor={mv2Theme["MainViewStyle-Primary"]["-ios-description-text-color"]}
        />
      </div>
    </>
  );
}
