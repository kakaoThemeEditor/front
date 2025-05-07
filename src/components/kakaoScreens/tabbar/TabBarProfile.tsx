import { PlusIcon } from "lucide-react";
import ProfileImg01 from "../../../assets/Images/profileImg01@3x.png";
import clsx from "clsx";
import { PreviewProfile } from "@/components/common/PreviewProfile";
import SpeechBubble from "@/components/button/SpeechBubble";
import { IconButton } from "@/components/common/IconButton";
import { ThemeValues } from "./type";
import { PreviewUpdateProfile } from "@/components/common/PreviewUpdateProfile";

export function TabBarProfile({
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
      {/* 본인 프로필 */}
      <div className={clsx("px-4 py-2", className)}>
        <div className="flex justify-between items-center gap-2 ">
          {/* 프로필 사진, 이름 */}
          <PreviewProfile
            imageUrl={
              !!themeValues["DefaultProfileStyle"]["-ios-background-image"]
                ? themeValues["DefaultProfileStyle"]["-ios-background-image"]
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
            textColor={themeValues["FeatureStyle-Primary"]["-ios-text-color"]}
          />
        </div>
      </div>

      {/* 업데이트한 프로필 */}
      <PreviewUpdateProfile />
    </>
  );
}
