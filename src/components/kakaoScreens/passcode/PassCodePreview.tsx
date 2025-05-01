import { ThemeValues } from "./PassCode";
import CircleButton from "../../button/CircleButton";
import SpeechBubble from "../../button/SpeechBubble";
import { PassCodeBullets } from "./PassCodeBullets";
import { PassCodeKeypad } from "./PassCodeKeypad";
import clsx from "clsx";
import { useWindowHeight } from "../../../hooks/use-window-height";

interface PassCodePreviewProps {
  themeValues: ThemeValues;
  activeSelected: boolean;
}

export function PassCodePreview({
  themeValues,
  activeSelected,
}: PassCodePreviewProps) {
  const { shouldAddPadding, paddingValue } = useWindowHeight();
  return (
    <div
      className="relative flex justify-center items-center min-h-[calc(100vh-36px)] overflow-auto border-r-2 border-r-gray-100"
      style={{
        paddingTop: shouldAddPadding ? `${paddingValue * 1.5}px` : "0",
        paddingBottom: shouldAddPadding ? `${paddingValue * 0.5}px` : "0",
      }}
    >
      <div
        className="w-64 xl:w-72 aspect-[9/18.7] bg-white rounded-2xl p-[2px]"
        style={{
          boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
        }}
      >
        <div className="relative flex flex-col justify-center size-full rounded-2xl border-2 border-white">
          <div className="w-5 h-5 absolute top-7 left-5">
            <CircleButton Number={1} />
          </div>
          <div
            className={clsx(
              "h-3/5 flex flex-col justify-center items-center rounded-t-2xl",
              themeValues.backgroundColor || "bg-red-200"
            )}
            style={{
              backgroundColor: themeValues.backgroundColor,
              backgroundImage: `url(${themeValues.iosBackgroundImage})`,
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
                  themeValues.iosTextColor || "text-black"
                )}
                style={{ color: themeValues.iosTextColor }}
              >
                비밀번호
              </div>
            </div>
            <div className="text-[11px] xl:text-xs text-gray-600 mb-4">
              카카오톡 암호를 입력해주세요.
            </div>
            <PassCodeBullets
              themeValues={themeValues}
              activeSelected={activeSelected}
            />
          </div>
          <PassCodeKeypad themeValues={themeValues} />
        </div>
      </div>
    </div>
  );
}
