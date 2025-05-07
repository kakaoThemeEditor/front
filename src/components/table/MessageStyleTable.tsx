import { ColorInput } from "../common/ColorInput";
import { SectionHeader } from "../common/SectionHeader";
import { EditTableRow } from "../common/EditTableRow";
import EditTableInnerRow from "../common/EditTableInnerRow";
import { MessageCellStyleType } from "../kakaoScreens/chatting/type";
import ImageFileButton from "../button/ImageFileButton";
import { InsetInput } from "../common/InsetInput";
import { InsetInputFour } from "../common/insetInputFour";
interface MessageStyleTableProps {
  themeValues: MessageCellStyleType;
  setThemeValues: React.Dispatch<React.SetStateAction<MessageCellStyleType>>;
}

export default function MessageStyleTable({ themeValues, setThemeValues }: MessageStyleTableProps) {
  const handleChange = (
    key: keyof MessageCellStyleType,
    subKey:
      | keyof MessageCellStyleType["MessageCellStyle-Send"]
      | keyof MessageCellStyleType["MessageCellStyle-Receive"],
    value: string
  ) => {
    setThemeValues((prev: MessageCellStyleType) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: value,
      },
    }));
  };

  // 이미지랑 인셋 두개 받아야함

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="BackgroundStyle-ChatRoom" subtitle="채팅방 배경 " />

      {/* 받은 메시지 */}
      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">첫 번째 말풍선</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">첫 말풍선 선택</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">말풍선 인셋</div>
          <InsetInputFour
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={2}>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선 선택</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선 인셋</div>
          <InsetInputFour
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={3}>
        <EditTableInnerRow>
          <div className="px-2 py-1">텍스트 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">텍스트 선택 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-selected-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-selected-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={4}>
        <EditTableInnerRow>
          <div className="px-2 py-1">읽지않은 메세지 숫자 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-title-edgeinsets"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-title-edgeinsets", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
      {/* 받은 메시지 */}
      <SectionHeader title="Receive Message" subtitle="받은 메시지 " />
      <EditTableRow number={5}>
        <EditTableInnerRow>
          <div className="px-2 py-1">첫 번째 말풍선</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">첫 말풍선 선택</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">말풍선 인셋</div>
          <InsetInputFour
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={6}>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선 선택</div>
          <div className="flex items-center justify-center gap-1">
            <ImageFileButton
              onImageUpload={(file) => handleChange("MessageCellStyle-Receive", "-ios-background-image", file)}
            />
            <InsetInput
              value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
              onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
            />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">두번째 이상 말풍선 인셋</div>
          <InsetInputFour
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={7}>
        <EditTableInnerRow>
          <div className="px-2 py-1">텍스트 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-background-image", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">텍스트 선택 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-selected-background-image"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-selected-background-image", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={8}>
        <EditTableInnerRow>
          <div className="px-2 py-1">읽지않은 메세지 숫자 컬러</div>
          <ColorInput
            value={themeValues["MessageCellStyle-Receive"]["-ios-title-edgeinsets"]}
            onChange={(value) => handleChange("MessageCellStyle-Receive", "-ios-title-edgeinsets", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
