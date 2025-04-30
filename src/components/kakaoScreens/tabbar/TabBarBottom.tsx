import MaintabBgImage from "../../../assets/Images/maintabBgImage@2x.png";
import SpeechBubble from "../../button/SpeechBubble";
import CircleButton from "../../button/CircleButton";
import { ThemeValues } from "./TabBar";
import clsx from "clsx";

export function TabBarBottom({
  themeValues,
  setThemeValues,
  isActive,
  setIsActive,
}: {
  themeValues: ThemeValues;
  setThemeValues: (themeValues: ThemeValues) => void;
  isActive: { [key: string]: boolean };
  setIsActive: (isActive: { [key: string]: boolean }) => void;
}) {
  return (
    <div
      className="relative flex h-20 p-4 justify-between mt-auto"
      style={{
        backgroundColor: themeValues.iosBackgroundImage ? "transparent" : themeValues.backgroundColor,
        backgroundImage: `url(${themeValues.iosBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute -left-4 top-2 w-6 h-6">
        <CircleButton Number={1} className="text-xs" />
      </div>

      {/* 첫번째 */}
      <div
        className={clsx(
          "relative w-12 h-12  rounded-full",
          !!isActive.iosFriendsNormalIconImage && !!themeValues.iosFriendsNormalIconImage
            ? ""
            : !!!isActive.iosFriendsNormalIconImage && !!themeValues.iosFriendsSelectedIconImage
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            !!isActive.iosFriendsNormalIconImage
              ? themeValues.iosFriendsNormalIconImage
              : themeValues.iosFriendsSelectedIconImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
          <SpeechBubble direction={"bottom"} children={2} />
        </div>
      </div>

      {/* 두번째 */}
      <div
        className={clsx(
          "relative w-12 h-12  rounded-full",
          !!isActive.iosChatsNormalIconImage && !!themeValues.iosChatsNormalIconImage
            ? ""
            : !!!isActive.iosChatsNormalIconImage && !!themeValues.iosChatsSelectedIconImage
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            !!isActive.iosChatsNormalIconImage
              ? themeValues.iosChatsNormalIconImage
              : themeValues.iosChatsSelectedIconImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
          <SpeechBubble direction={"bottom"} children={3} />
        </div>
      </div>

      {/* 세번째 */}
      <div
        className={clsx(
          "relative w-12 h-12  rounded-full",
          !!isActive.iosOpenchatsNormalIconImage && !!themeValues.iosOpenchatsNormalIconImage
            ? ""
            : !!!isActive.iosOpenchatsNormalIconImage && !!themeValues.iosOpenchatsSelectedIconImage
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            !!isActive.iosOpenchatsNormalIconImage
              ? themeValues.iosOpenchatsNormalIconImage
              : themeValues.iosOpenchatsSelectedIconImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
          <SpeechBubble direction={"bottom"} children={4} />
        </div>
      </div>

      {/* 네번째 */}
      <div
        className={clsx(
          "relative w-12 h-12  rounded-full",
          !!isActive.iosShoppingNormalIconImage && !!themeValues.iosShoppingNormalIconImage
            ? ""
            : !!!isActive.iosShoppingNormalIconImage && !!themeValues.iosShoppingSelectedIconImage
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            !!isActive.iosShoppingNormalIconImage
              ? themeValues.iosShoppingNormalIconImage
              : themeValues.iosShoppingSelectedIconImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
          <SpeechBubble direction={"bottom"} children={5} />
        </div>
      </div>

      {/* 다섯번째 */}
      <div
        className={clsx(
          "relative w-12 h-12  rounded-full",
          !!isActive.iosMoreNormalIconImage && !!themeValues.iosMoreNormalIconImage
            ? ""
            : !!!isActive.iosMoreNormalIconImage && !!themeValues.iosMoreSelectedIconImage
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            !!isActive.iosMoreNormalIconImage
              ? themeValues.iosMoreNormalIconImage
              : themeValues.iosMoreSelectedIconImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-4">
          <SpeechBubble direction={"bottom"} children={6} />
        </div>
      </div>
    </div>
  );
}
