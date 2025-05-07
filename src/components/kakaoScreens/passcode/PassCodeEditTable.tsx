import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import ImageFileButton from "../../input/ImageFileButton";
import { RotateCw } from "lucide-react";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { EditTableInnerRowTextCell } from "../table/EditTableInnerRowTextCell";
import { PasscodeTheme } from "./type";
import { useThemeStore } from "@/store/themeStore";

export function PassCodeEditTable({
  activeSelected,
  setActiveSelected,
}: {
  activeSelected: boolean;
  setActiveSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { passcode, setPasscode } = useThemeStore();

  const handleChange = (
    key: keyof PasscodeTheme,
    subKey:
      | keyof PasscodeTheme["BackgroundStyle-Passcode"]
      | keyof PasscodeTheme["LabelStyle-PasscodeTitle"]
      | keyof PasscodeTheme["BulletStyle-Passcode"],
    value: string | File
  ) => {
    setPasscode({
      ...passcode,
      [key]: {
        ...passcode[key],
        [subKey]: value,
      },
    });
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="잠금화면 상단" subtitle="색상, 이미지" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">배경 컬러</div>
          <ColorInput
            value={passcode["BackgroundStyle-Passcode"]["background-color"]}
            onChange={(value) => handleChange("BackgroundStyle-Passcode", "background-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">배경 이미지</div>
          <ImageFileButton
            onImageUpload={(file) => handleChange("BackgroundStyle-Passcode", "-ios-background-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <SectionHeader title="LabelStyle-PasscodeTitle" subtitle="텍스트 컬러" />

      <EditTableRow number={2}>
        <EditTableInnerRow>
          <div className="px-2 py-1">텍스트 컬러</div>
          <ColorInput
            value={passcode["LabelStyle-PasscodeTitle"]["-ios-text-color"]}
            onChange={(value) => handleChange("LabelStyle-PasscodeTitle", "-ios-text-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>

      <SectionHeader title="PasscodeStyle" subtitle="키패드" />

      <EditTableRow number={3}>
        {/*  */}
        <EditTableInnerRow isActive={!activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지" onClick={() => setActiveSelected(false)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-first-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={!activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지" onClick={() => setActiveSelected(false)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-second-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={!activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지" onClick={() => setActiveSelected(false)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-third-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={!activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지" onClick={() => setActiveSelected(false)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-fourth-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={4}>
        {/*  */}
        <EditTableInnerRow isActive={activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지 - 입력" onClick={() => setActiveSelected(true)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-selected-first-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지 - 입력" onClick={() => setActiveSelected(true)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-selected-second-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지 - 입력" onClick={() => setActiveSelected(true)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-selected-third-image", file)}
          />
        </EditTableInnerRow>
        {/*  */}
        <EditTableInnerRow isActive={activeSelected}>
          <EditTableInnerRowTextCell children="잠금화면 불릿 이미지 - 입력" onClick={() => setActiveSelected(true)} />
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-bullet-selected-fourth-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={5}>
        <EditTableInnerRow>
          <div className="px-2 py-1">키패드 배경 컬러</div>
          <ColorInput
            value={passcode["BulletStyle-Passcode"]["-ios-keypad-background-color"]}
            onChange={(value) => handleChange("BulletStyle-Passcode", "-ios-keypad-background-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={6}>
        <EditTableInnerRow>
          <div className="px-2 py-1">키패드 숫자 텍스트 컬러</div>
          <ColorInput
            value={passcode["BulletStyle-Passcode"]["-ios-keypad-text-normal-color"]}
            onChange={(value) => handleChange("BulletStyle-Passcode", "-ios-keypad-text-normal-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={7}>
        <EditTableInnerRow>
          <div className="px-2 py-1">키패드 프레스 컬러</div>
          <ImageFileButton
            onImageUpload={(file) => handleChange("BulletStyle-Passcode", "-ios-keypad-number-highlighted-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
