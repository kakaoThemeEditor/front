import { PasscodeTheme } from "./type";
import { IoBackspaceOutline } from "react-icons/io5";
import SpeechBubble from "@/components/button/SpeechBubble";
import CircleButton from "@/components/button/CircleButton";

interface PassCodeKeypadProps {
  passcode: PasscodeTheme;
}

export function PassCodeKeypad({ passcode }: PassCodeKeypadProps) {
  return (
    <div
      className="relative h-2/5 w-full"
      style={{
        backgroundColor: passcode["BulletStyle-Passcode"]["-ios-keypad-background-color"],
      }}
    >
      <div className="relative h-full w-full border-3 border-kakao-blue rounded-2xl p-3 grid grid-cols-3 gap-2 place-items-center">
        <div className="w-5 h-5 absolute -left-3 top-1/2 transform -translate-y-1/2">
          <CircleButton Number={5} />
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          1
        </div>
        <div
          className="relative flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
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
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          3
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          4
        </div>
        {/* 이부분 CSS 수정 필요 */}
        <div
          className="relative flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            backgroundImage: `url(${passcode["BulletStyle-Passcode"]["-ios-keypad-number-highlighted-image"]})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "60px",
            height: "60px",
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
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
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          6
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          7
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          8
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        >
          9
        </div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
          }}
        ></div>
        <div
          className="flex flex-col justify-center items-center font-bold text-base xl:text-lg"
          style={{
            color: passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"],
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
