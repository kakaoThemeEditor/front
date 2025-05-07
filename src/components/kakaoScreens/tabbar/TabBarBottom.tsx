import MaintabBgImage from "../../../assets/Images/maintabBgImage@2x.png";
import SpeechBubble from "../../button/SpeechBubble";
import CircleButton from "../../button/CircleButton";
import clsx from "clsx";
import { useThemeStore } from "@/store/themeStore";
import { IsActive } from "./type";
export function TabBarBottom({ isActive }: { isActive: IsActive }) {
  const { tabbar } = useThemeStore();

  return (
    <div
      className="relative flex h-16 xl:h-18 p-3 xl:p-4 justify-between mt-auto rounded-b-2xl"
      style={{
        backgroundColor: tabbar["TabbarStyle-Main"]["-ios-background-image"]
          ? "transparent"
          : tabbar["TabbarStyle-Main"]["background-color"],
        backgroundImage: `url(${tabbar["TabbarStyle-Main"]["-ios-background-image"]})`,
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
          "relative w-8 h-8 xl:w-9 xl:h-9  rounded-full",
          !!isActive["TabbarStyle-Main"]["-ios-friends-normal-icon-image"] &&
            !!tabbar["TabbarStyle-Main"]["-ios-friends-normal-icon-image"]
            ? ""
            : !!!isActive["TabbarStyle-Main"]["-ios-friends-normal-icon-image"] &&
              !!tabbar["TabbarStyle-Main"]["-ios-friends-selected-icon-image"]
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            isActive["TabbarStyle-Main"]["-ios-friends-normal-icon-image"]
              ? tabbar["TabbarStyle-Main"]["-ios-friends-normal-icon-image"]
              : tabbar["TabbarStyle-Main"]["-ios-friends-selected-icon-image"]
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
          "relative w-8 h-8 xl:w-9 xl:h-9  rounded-full",
          !!isActive["TabbarStyle-Main"]["-ios-chats-normal-icon-image"] &&
            !!tabbar["TabbarStyle-Main"]["-ios-chats-normal-icon-image"]
            ? ""
            : !!!isActive["TabbarStyle-Main"]["-ios-chats-normal-icon-image"] &&
              !!tabbar["TabbarStyle-Main"]["-ios-chats-selected-icon-image"]
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            isActive["TabbarStyle-Main"]["-ios-chats-normal-icon-image"]
              ? tabbar["TabbarStyle-Main"]["-ios-chats-normal-icon-image"]
              : tabbar["TabbarStyle-Main"]["-ios-chats-selected-icon-image"]
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
          "relative w-8 h-8 xl:w-9 xl:h-9  rounded-full",
          !!isActive["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"] &&
            !!tabbar["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"]
            ? ""
            : !!!isActive["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"] &&
              !!tabbar["TabbarStyle-Main"]["-ios-openchats-selected-icon-image"]
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            isActive["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"]
              ? tabbar["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"]
              : tabbar["TabbarStyle-Main"]["-ios-openchats-selected-icon-image"]
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
          "relative w-8 h-8 xl:w-9 xl:h-9  rounded-full",
          !!isActive["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"] &&
            !!tabbar["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"]
            ? ""
            : !!!isActive["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"] &&
              !!tabbar["TabbarStyle-Main"]["-ios-shopping-selected-icon-image"]
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            isActive["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"]
              ? tabbar["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"]
              : tabbar["TabbarStyle-Main"]["-ios-shopping-selected-icon-image"]
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
          "relative w-8 h-8 xl:w-9 xl:h-9  rounded-full",
          !!isActive["TabbarStyle-Main"]["-ios-more-normal-icon-image"] &&
            !!tabbar["TabbarStyle-Main"]["-ios-more-normal-icon-image"]
            ? ""
            : !!!isActive["TabbarStyle-Main"]["-ios-more-normal-icon-image"] &&
              !!tabbar["TabbarStyle-Main"]["-ios-more-selected-icon-image"]
            ? ""
            : "bg-gray-200"
        )}
        style={{
          backgroundImage: `url(${
            isActive["TabbarStyle-Main"]["-ios-more-normal-icon-image"]
              ? tabbar["TabbarStyle-Main"]["-ios-more-normal-icon-image"]
              : tabbar["TabbarStyle-Main"]["-ios-more-selected-icon-image"]
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
