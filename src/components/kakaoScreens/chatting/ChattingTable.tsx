import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { MessageCellStyleType } from "./type";
import ImageFileButton from "../../input/ImageFileButton";
import { useThemeStore } from "@/store/themeStore";
import { isActiveType } from "./type";
import { EditTableInnerRowTextCell } from "@/components/kakaoScreens/table/EditTableInnerRowTextCell";

export default function ChattingTable({
  isActive,
  setIsActive,
}: {
  isActive: isActiveType;
  setIsActive: (isActive: isActiveType) => void;
}) {
  const { messageCell, setMessageCell } = useThemeStore();
  const handleChange = (
    key: keyof MessageCellStyleType,
    subKey:
      | keyof MessageCellStyleType["MessageCellStyle-Send"]
      | keyof MessageCellStyleType["MessageCellStyle-Receive"],
    value: string
  ) => {
    setMessageCell({
      ...messageCell,
      [key]: {
        ...messageCell[key],
        [subKey]: value || "",
      },
    });
  };

  const handleActive = (
    key: keyof isActiveType,
    subKey: keyof isActiveType["MessageCellStyle-Receive"] | keyof isActiveType["MessageCellStyle-Send"],
    value: boolean
  ) => {
    setIsActive({
      ...isActive,
      [key]: {
        ...isActive[key],
        [subKey]: value,
      },
    });
  };

  // 이미지랑 인셋 두개 받아야함

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="BackgroundStyle-ChatRoom" subtitle="채팅방 배경 " />

      {/* 받은 메시지 */}
      <EditTableRow number={1}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Receive"]["-ios-text-color"]}>
          <EditTableInnerRowTextCell onClick={() => handleActive("MessageCellStyle-Receive", "-ios-text-color", true)}>
            텍스트 컬러
          </EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Receive"]["-ios-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Receive"]["-ios-text-color"]}>
          <EditTableInnerRowTextCell onClick={() => handleActive("MessageCellStyle-Receive", "-ios-text-color", false)}>
            텍스트 선택 컬러
          </EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Receive"]["-ios-selected-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-selected-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={2}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Receive"]["-ios-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Receive", "-ios-background-image", true)}
          >
            첫 번째 말풍선
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Receive"]["-ios-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Receive", "-ios-background-image", false)}
          >
            첫 번째 말풍선 선택
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-selected-background-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={3}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Receive"]["-ios-group-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Receive", "-ios-group-background-image", true)}
          >
            두번째 이상 말풍선
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-group-background-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Receive"]["-ios-group-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Receive", "-ios-group-background-image", false)}
          >
            두번째 이상 말풍선 선택
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) =>
              handleChange("MessageCellStyle-Receive", "-ios-group-selected-background-image", file)
            }
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={4}>
        <EditTableInnerRow>
          <EditTableInnerRowTextCell>읽지않은 메세지 숫자 컬러</EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Receive"]["-ios-unread-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-unread-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
      {/* 보낸 메시지 */}

      <SectionHeader title="Send Message" subtitle="보낸 메시지 " />
      <EditTableRow number={5}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Send"]["-ios-text-color"]}>
          <EditTableInnerRowTextCell onClick={() => handleActive("MessageCellStyle-Send", "-ios-text-color", true)}>
            텍스트 컬러
          </EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Send"]["-ios-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Send", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Send"]["-ios-text-color"]}>
          <EditTableInnerRowTextCell onClick={() => handleActive("MessageCellStyle-Send", "-ios-text-color", false)}>
            텍스트 선택 컬러
          </EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Send"]["-ios-selected-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Send", "-ios-selected-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
      <EditTableRow number={6}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Send"]["-ios-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Send", "-ios-background-image", true)}
          >
            첫 번째 말풍선
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Send", "-ios-background-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Send"]["-ios-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Send", "-ios-background-image", false)}
          >
            첫 번째 말풍선 선택
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Send", "-ios-selected-background-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>
      <EditTableRow number={7}>
        <EditTableInnerRow isActive={isActive["MessageCellStyle-Send"]["-ios-group-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Send", "-ios-group-background-image", true)}
          >
            두번째 이상 말풍선
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MessageCellStyle-Send", "-ios-group-background-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["MessageCellStyle-Send"]["-ios-group-background-image"]}>
          <EditTableInnerRowTextCell
            onClick={() => handleActive("MessageCellStyle-Send", "-ios-group-background-image", false)}
          >
            두번째 이상 말풍선 선택
          </EditTableInnerRowTextCell>
          <ImageFileButton
            onImageUpload={(file) =>
              handleChange("MessageCellStyle-Send", "-ios-group-selected-background-image", file)
            }
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={8}>
        <EditTableInnerRow>
          <EditTableInnerRowTextCell>읽지않은 메세지 숫자 컬러</EditTableInnerRowTextCell>
          <ColorInput
            value={messageCell["MessageCellStyle-Send"]["-ios-unread-text-color"]}
            onChange={(value) => handleChange("MessageCellStyle-Send", "-ios-unread-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
