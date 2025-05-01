import { ThemeValues } from "./PassCode";
import { IoBackspaceOutline } from "react-icons/io5";
import SpeechBubble from "../../button/SpeechBubble";
import CircleButton from "../../button/CircleButton";

interface PassCodeKeypadProps {
  themeValues: ThemeValues;
}

export function PassCodeKeypad({ themeValues }: PassCodeKeypadProps) {
  return (
    <div
      className="relative h-2/5 w-full"
      style={{
        backgroundColor: themeValues.iosKeypadBackgroundColor,
      }}
    >
      <div className="relative h-full w-full border-3 border-kakao-blue rounded-2xl p-3 grid grid-cols-3 gap-2 place-items-center">
        <div className="w-5 h-5 absolute -left-3 top-1/2 transform -translate-y-1/2">
          <CircleButton Number={5} />
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          1
        </div>
        <div
          className="relative flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          2
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-10 w-8 h-4">
            <SpeechBubble direction="right">6</SpeechBubble>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          3
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          4
        </div>
        {/* 이부분 CSS 수정 필요 */}
        <div
          className="relative flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            backgroundImage: `url(${themeValues.iosKeypadNumberHighlightedImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "60px",
            height: "60px",
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          5
          <div className="absolute top-1/2 transform -translate-y-1/2 -left-6 w-8 h-4">
            <SpeechBubble direction="right">7</SpeechBubble>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          6
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          7
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          8
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          9
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        ></div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: themeValues.iosKeypadTextNormalColor,
          }}
        >
          0
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-base xl:text-lg">
          <IoBackspaceOutline className="text-lg xl:text-xl" />
        </div>
      </div>
    </div>
  );
}
