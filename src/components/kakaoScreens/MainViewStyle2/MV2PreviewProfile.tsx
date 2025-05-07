import { PlusIcon } from "lucide-react";
import clsx from "clsx";
import { IconButton } from "@/components/button/IconButton";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import { PreviewUpdateProfile } from "@/components/kakaoScreens/preview/PreviewUpdateProfile";
import SpeechBubble from "@/components/button/SpeechBubble";
import { useThemeStore } from "@/store/themeStore";
export function MV2PreviewProfile() {
  const { mv2Theme } = useThemeStore();
  return (
    <>
      {/* 본인 프로필 */}
      <div className={clsx("px-4 py-2 ")}>
        <div className="flex justify-between items-center gap-2">
          <PreviewProfile
            name="이름"
            size="lg"
            avartarRounded="rounded-2xl"
            descriptionColor={"상태메시지"}
            nameColor={mv2Theme["MainViewStyle-Primary"]["-ios-text-color"]}
            children={<SpeechBubble direction="left" children={2} className="absolute top-[9px] -right-7" />}
            isBottomBorder={true}
          />
          <IconButton
            icon={PlusIcon}
            text="멀티프로필"
            className="flex items-center rounded-2xl bg-transparent border-1 border-black text-[10px] xl:text-[11px]  px-2 py-1"
          />
        </div>
      </div>

      {/* 업데이트한 프로필 */}
      <PreviewUpdateProfile
        borderColor={mv2Theme["SectionTitleStyle-Main"]["border-color"]}
        updateTextColor={mv2Theme["SectionTitleStyle-Main"]["-ios-text-color"]}
        updateTextAlpha={mv2Theme["SectionTitleStyle-Main"]["-ios-text-alpha"]}
        children={<SpeechBubble direction="left" children={4} className="absolute top-[7px] left-23.5" />}
      />
    </>
  );
}
