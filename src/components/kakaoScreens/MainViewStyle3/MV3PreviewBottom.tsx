import MaintabBgImage from "../../../assets/Images/maintabBgImage@2x.png";
import SpeechBubble from "../../button/SpeechBubble";
import CircleButton from "../../button/CircleButton";
import { ThemeValues } from "./MainviewStyle3";
import clsx from "clsx";

export function MV3PreviewBottom() {
  return (
    <div className="relative flex h-16 xl:h-18 p-3 xl:p-4 justify-between mt-auto rounded-b-2xl bg-white">
      {/* 첫번째 */}
      <div className={clsx("relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full")}></div>

      {/* 두번째 */}
      <div className={clsx("relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full")}></div>

      {/* 세번째 */}
      <div className={clsx("relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full")}></div>

      {/* 네번째 */}
      <div className={clsx("relative w-8 h-8 xl:w-9 xl:h-9  rounded-full bg-gray-200")}></div>

      {/* 다섯번째 */}
      <div className={clsx("relative w-8 h-8 xl:w-9 xl:h-9 bg-gray-200 rounded-full")}></div>
    </div>
  );
}
