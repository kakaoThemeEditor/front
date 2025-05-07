import { PreviewProfile } from "@/components/common/PreviewProfile";
import CircleButton from "@/components/button/CircleButton";
import SpeechBubble from "@/components/button/SpeechBubble";
import { MainViewStyle1Theme } from "./type";

interface ChatItemProps {
  isActive?: boolean;
  hasNotification?: boolean;
  notificationCount?: number;
  isBorder?: boolean;
}

function ChatItem({ isActive, hasNotification, notificationCount, isBorder }: ChatItemProps) {
  return (
    <div
      className={`flex justify-between w-full px-4 py-2 rounded-lg ${isActive ? "bg-black/10" : ""} ${
        isBorder ? "border-2  border-kakao-blue" : ""
      }`}
    >
      <PreviewProfile
        name="어피치"
        description="오늘 장보기 목록"
        size="md"
        avartarRounded="rounded-lg"
      ></PreviewProfile>

      <div className="flex flex-col items-end gap-1">
        <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
        {hasNotification && (
          <div className="text-white text-[8px] xl:text-[10px] bg-red-500/70 rounded-full px-1 xl:px-1.5">
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
}

export function MV1ChatList({ themeValues }: { themeValues: MainViewStyle1Theme }) {
  return (
    <>
      <ChatItem />

      <div
        className={`relative flex justify-between w-full px-4 py-2 rounded-lg border-2  border-kakao-blue `}
        style={{
          backgroundColor: themeValues["MainViewStyle-Primary"]["-ios-normal-background-color"],
          opacity: themeValues["MainViewStyle-Primary"]["-ios-normal-background-alpha"],
        }}
      >
        <CircleButton Number={3} className="absolute -top-2.5 xl:-top-2.5 right-12.5 xl:right-14" />
        <PreviewProfile
          name="어피치"
          description="오늘 장보기 목록"
          size="md"
          avartarRounded="rounded-lg"
          descriptionColor={themeValues["MainViewStyle-Primary"]["-ios-paragraph-text-color"]}
        >
          <SpeechBubble direction="left" className="absolute top-1/2 -right-8.5">
            2
          </SpeechBubble>
        </PreviewProfile>

        <div className="flex flex-col items-end gap-1">
          <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
        </div>
      </div>
      <ChatItem />

      <div
        className={`relative flex justify-between w-full px-4 py-2 rounded-lg bg-black/10 border-2  border-kakao-blue`}
        style={{
          backgroundColor: themeValues["MainViewStyle-Primary"]["-ios-selected-background-color"],
          opacity: themeValues["MainViewStyle-Primary"]["-ios-selected-background-alpha"],
        }}
      >
        <CircleButton Number={4} className="absolute -top-2.5 xl:-top-2.5 right-12.5 xl:right-14" />

        <PreviewProfile
          name="어피치"
          description="오늘 장보기 목록"
          size="md"
          avartarRounded="rounded-lg"
          descriptionColor={themeValues["MainViewStyle-Primary"]["-ios-paragraph-highlighted-text-color"]}
        >
          <SpeechBubble direction="left" className="absolute top-1/2 -right-8.5">
            2
          </SpeechBubble>
        </PreviewProfile>

        <div className="flex flex-col items-end gap-1">
          <div className="text-[8px] xl:text-[10px]">오후 5:11</div>
          <div className="text-white text-[8px] xl:text-[10px] bg-red-500/70 rounded-full px-1 xl:px-1.5"></div>
        </div>
      </div>

      <ChatItem hasNotification notificationCount={18} />
    </>
  );
}
