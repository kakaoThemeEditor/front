import { ThemeValues } from "./PassCode";
import SpeechBubble from "../../button/SpeechBubble";
import clsx from "clsx";

interface PassCodeBulletsProps {
  themeValues: ThemeValues;
  activeSelected: boolean;
}

export function PassCodeBullets({ themeValues, activeSelected }: PassCodeBulletsProps) {
  console.log(
    activeSelected && !!themeValues.iosBulletSelectedFirstImage,
    !activeSelected && !!themeValues.iosBulletFirstImage
  );
  return (
    <div className="flex gap-2">
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues.iosBulletSelectedFirstImage
            ? ""
            : !activeSelected && !!themeValues.iosBulletFirstImage
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedFirstImage : themeValues.iosBulletFirstImage
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
          activeSelected && !!themeValues.iosBulletSelectedSecondImage
            ? ""
            : !activeSelected && !!themeValues.iosBulletSecondImage
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedSecondImage : themeValues.iosBulletSecondImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className={clsx(
          "relative w-7 h-7  ",
          activeSelected && !!themeValues.iosBulletSelectedThirdImage
            ? ""
            : !activeSelected && !!themeValues.iosBulletThirdImage
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedThirdImage : themeValues.iosBulletThirdImage
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
          activeSelected && !!themeValues.iosBulletSelectedFourthImage
            ? ""
            : !activeSelected && !!themeValues.iosBulletFourthImage
            ? ""
            : "bg-gray-200 rounded-full"
        )}
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedFourthImage : themeValues.iosBulletFourthImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
