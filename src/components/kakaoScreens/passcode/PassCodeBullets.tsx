import { ThemeValues } from "./PassCode";
import SpeechBubble from "../../button/SpeechBubble";

interface PassCodeBulletsProps {
  themeValues: ThemeValues;
  activeSelected: boolean;
}

export function PassCodeBullets({ themeValues, activeSelected }: PassCodeBulletsProps) {
  return (
    <div className="flex gap-2">
      <div
        className="relative w-7 h-7 bg-gray-200 rounded-full"
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedFirstImage : themeValues.iosBulletFirstImage
          })`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 -left-9 w-8 h-4">
          <SpeechBubble direction="right">
            <span className="text-sm">4</span>
          </SpeechBubble>
        </div>
      </div>
      <div
        className="relative w-7 h-7 bg-gray-200 rounded-full"
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedSecondImage : themeValues.iosBulletSecondImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="relative w-7 h-7 bg-gray-200 rounded-full"
        style={{
          backgroundImage: `url(${
            activeSelected ? themeValues.iosBulletSelectedThirdImage : themeValues.iosBulletThirdImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 left-0 w-8 h-4">
          <SpeechBubble direction="top">
            <span className="text-sm">3</span>
          </SpeechBubble>
        </div>
      </div>
      <div
        className="relative w-7 h-7 bg-gray-200 rounded-full"
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
