import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { MessageNotificationBarType } from "./type";
import { RotateCw } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import ImageFileButton from "../../input/ImageFileButton";

export default function messageNotificationEditTable({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { messageNotification, setMessageNotification } = useThemeStore();
  console.log("messageNotification", messageNotification);
  const handleChange = (
    key: keyof MessageNotificationBarType,
    subKey:
      | keyof MessageNotificationBarType["BackgroundStyle-ChatRoom"]
      | keyof MessageNotificationBarType["BackgroundStyle-MessageNotificationBar"]
      | keyof MessageNotificationBarType["LabelStyle-MessageNotificationBarName"]
      | keyof MessageNotificationBarType["LabelStyle-MessageNotificationBarMessage"]
      | keyof MessageNotificationBarType["BackgroundStyle-DirectShareBar"]
      | keyof MessageNotificationBarType["LabelStyle-DirectShareBarName"]
      | keyof MessageNotificationBarType["LabelStyle-DirectShareBarMessage"],
    value: string | File
  ) => {
    setMessageNotification({
      ...messageNotification,
      [key]: {
        ...messageNotification[key],
        [subKey]: value,
      },
    });
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      {/* 채팅방 배경 스타일 */}
      <SectionHeader title="BackgroundStyle-ChatRoom" subtitle="채팅방 배경 스타일" />
      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">채팅방 배경색</div>
          <ColorInput
            value={messageNotification["BackgroundStyle-ChatRoom"]["background-color"]}
            onChange={(value) => handleChange("BackgroundStyle-ChatRoom", "background-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">채팅방 배경 이미지</div>
          <ImageFileButton
            onImageUpload={(file) => handleChange("BackgroundStyle-ChatRoom", "-ios-background-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      {/* 메시지 알림바 스타일 */}
      <SectionHeader title="BackgroundStyle-MessageNotificationBar" subtitle="메시지 알림바 스타일" />
      <EditTableRow number={2}>
        <EditTableInnerRow isActive={isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(true)}>
            알림바 배경색
          </div>
          <ColorInput
            value={messageNotification["BackgroundStyle-MessageNotificationBar"]["background-color"]}
            onChange={(value) => handleChange("BackgroundStyle-MessageNotificationBar", "background-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      {/* 알림바 이름 스타일 */}
      <SectionHeader title="LabelStyle-MessageNotificationBarName" subtitle="알림바 이름 스타일" />
      <EditTableRow number={3}>
        <EditTableInnerRow isActive={isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(true)}>
            이름 텍스트 색상
          </div>
          <ColorInput
            value={messageNotification["LabelStyle-MessageNotificationBarName"]["-ios-text-color"]}
            onChange={(value) => handleChange("LabelStyle-MessageNotificationBarName", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      {/* 알림바 메시지 스타일 */}
      <SectionHeader title="LabelStyle-MessageNotificationBarMessage" subtitle="알림바 메시지 스타일" />
      <EditTableRow number={4}>
        <EditTableInnerRow isActive={isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(true)}>
            메시지 텍스트 색상
          </div>
          <ColorInput
            value={messageNotification["LabelStyle-MessageNotificationBarMessage"]["-ios-text-color"]}
            onChange={(value) => handleChange("LabelStyle-MessageNotificationBarMessage", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <SectionHeader title="BackgroundStyle-DirectShareBar" subtitle="다이렉트 쉐어바 스타일" />
      <EditTableRow number={5}>
        <EditTableInnerRow isActive={!isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(false)}>
            쉐어바 배경색
          </div>
          <ColorInput
            value={messageNotification["BackgroundStyle-DirectShareBar"]["background-color"]}
            onChange={(value) => handleChange("BackgroundStyle-DirectShareBar", "background-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <SectionHeader title="LabelStyle-DirectShareBarName" subtitle="쉐어바 이름 스타일" />
      <EditTableRow number={6}>
        <EditTableInnerRow isActive={!isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(false)}>
            이름 텍스트 색상
          </div>
          <ColorInput
            value={messageNotification["LabelStyle-DirectShareBarName"]["-ios-text-color"]}
            onChange={(value) => handleChange("LabelStyle-DirectShareBarName", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <SectionHeader title="LabelStyle-DirectShareBarMessage" subtitle="쉐어바 메시지 스타일" />
      <EditTableRow number={7}>
        <EditTableInnerRow isActive={!isActive}>
          <div className="px-2 py-1" onClick={() => setIsActive(false)}>
            메시지 텍스트 색상
          </div>
          <ColorInput
            value={messageNotification["LabelStyle-DirectShareBarMessage"]["-ios-text-color"]}
            onChange={(value) => handleChange("LabelStyle-DirectShareBarMessage", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
