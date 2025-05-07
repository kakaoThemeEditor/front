import CircleButton from "../../button/CircleButton";
import SpeechBubble from "../../button/SpeechBubble";
import { PassCodeBullets } from "./PassCodeBullets";
import { PassCodeKeypad } from "./PassCodeKeypad";
import clsx from "clsx";
import { KakaoPhoneFrame } from "@/components/common/KakaoPhoneFrame";
import { ThemeValues } from "./type";

interface PassCodePreviewProps {
  themeValues: ThemeValues;
  activeSelected: boolean;
}

export function PassCodePreview({ themeValues, activeSelected }: PassCodePreviewProps) {
  return (
    <KakaoPhoneFrame>
      <div className="w-5 h-5 absolute top-7 left-5">
        <CircleButton Number={1} />
      </div>
      <div
        className={clsx(
          "h-3/5 flex flex-col justify-center items-center rounded-t-2xl",
          themeValues["BackgroundStyle-Passcode"]["background-color"] || "bg-red-100"
        )}
        style={{
          backgroundColor: themeValues["BackgroundStyle-Passcode"]["background-color"],
          backgroundImage: `url(${themeValues["BackgroundStyle-Passcode"]["-ios-background-image"]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative">
          <div className="absolute top-9.5 -left-9 w-8 h-4">
            <SpeechBubble direction="right">2</SpeechBubble>
          </div>
          <div
            className={clsx(
              "text-base xl:text-lg font-bold mt-8 mb-2",
              themeValues["LabelStyle-PasscodeTitle"]["-ios-text-color"] || "text-black"
            )}
            style={{ color: themeValues["LabelStyle-PasscodeTitle"]["-ios-text-color"] }}
          >
            비밀번호
          </div>
        </div>
        <div className="text-[11px] xl:text-xs text-gray-600 mb-4">카카오톡 암호를 입력해주세요.</div>
        <PassCodeBullets themeValues={themeValues} activeSelected={activeSelected} />
      </div>
      <PassCodeKeypad themeValues={themeValues} />
    </KakaoPhoneFrame>
  );
}
