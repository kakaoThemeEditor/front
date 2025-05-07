import { PlusIcon } from "lucide-react";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
import { PreviewProfile } from "@/components/kakaoScreens/preview/PreviewProfile";
import SpeechBubble from "@/components/button/SpeechBubble";
import { IconButton } from "@/components/button/IconButton";
import { PreviewUpdateProfile } from "@/components/kakaoScreens/preview/PreviewUpdateProfile";
import { useThemeStore } from "@/store/themeStore";

export function TabBarProfile() {
  const { tabbar } = useThemeStore();

  return (
    <>
      {/* 본인 프로필 */}
      <div className={clsx("px-4 py-2")}>
        <div className="flex justify-between items-center gap-2 ">
          {/* 프로필 사진, 이름 */}
          <PreviewProfile
            imageUrl={
              !!tabbar["DefaultProfileStyle"]["-ios-background-image"]
                ? tabbar["DefaultProfileStyle"]["-ios-background-image"]
                : ProfileImg01
            }
            name="이름"
            size="lg"
            children={
              <SpeechBubble
                direction="bottom"
                children={7}
                className="absolute -top-4 left-5 transform -translate-x-1/2"
              />
            }
          />

          <IconButton
            icon={PlusIcon}
            text="멀티프로필"
            size="sm"
            textColor={tabbar["FeatureStyle-Primary"]["-ios-text-color"]}
          />
        </div>
      </div>

      {/* 업데이트한 프로필 */}
      <PreviewUpdateProfile />
    </>
  );
}
