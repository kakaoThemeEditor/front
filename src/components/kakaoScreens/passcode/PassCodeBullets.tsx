import { ThemeValues } from "./type";
import SpeechBubble from "../../button/SpeechBubble";
import clsx from "clsx";

interface PassCodeBulletsProps {
  themeValues: ThemeValues;
  activeSelected: boolean;
}

export function PassCodeBullets({ themeValues, activeSelected }: PassCodeBulletsProps) {
  console.log(
    activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-first-image"],
    !activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-first-image"]
  );
  return (
    <div className="flex gap-2">
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-first-image"]
            ? ""
            : !activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-first-image"]
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected
              ? themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-first-image"]
              : themeValues["BulletStyle-Passcode"]["-ios-bullet-first-image"]
          })`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 -left-9 w-8 h-4">
          <SpeechBubble direction="right">4</SpeechBubble>
        </div>
      </div>
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-second-image"]
            ? ""
            : !activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-second-image"]
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected
              ? themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-second-image"]
              : themeValues["BulletStyle-Passcode"]["-ios-bullet-second-image"]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-third-image"]
            ? ""
            : !activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-third-image"]
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected
              ? themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-third-image"]
              : themeValues["BulletStyle-Passcode"]["-ios-bullet-third-image"]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 left-0 w-8 h-4">
          <SpeechBubble direction="top">3</SpeechBubble>
        </div>
      </div>
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-fourth-image"]
            ? ""
            : !activeSelected && !!themeValues["BulletStyle-Passcode"]["-ios-bullet-fourth-image"]
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected
              ? themeValues["BulletStyle-Passcode"]["-ios-bullet-selected-fourth-image"]
              : themeValues["BulletStyle-Passcode"]["-ios-bullet-fourth-image"]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
