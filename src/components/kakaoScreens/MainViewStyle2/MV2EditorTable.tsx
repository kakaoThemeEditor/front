import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import ImageFileButton from "../../input/ImageFileButton";
import { MainViewStyle2Theme } from "./type";
import { AlphaInput } from "../../input/AlphaInput";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { useThemeStore } from "@/store/themeStore";

export function MV2EditorTable() {
  const { mv2Theme, setMv2Theme } = useThemeStore();

  const handleChange = (
    key: keyof MainViewStyle2Theme,
    subKey: keyof MainViewStyle2Theme["MainViewStyle-Primary"] | keyof MainViewStyle2Theme["SectionTitleStyle-Main"],
    value: string | number | File
  ) => {
    setMv2Theme({
      ...mv2Theme,
      [key]: {
        ...mv2Theme[key],
        [subKey]: value,
      },
    });
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      {/* MainViewStyle-Primary */}
      <SectionHeader title="MainViewStyle-Primary" subtitle="기본 메인/바디 스타일" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">친구/채팅탭 배경 컬러</div>
          <ColorInput
            value={mv2Theme["MainViewStyle-Primary"]["background-color"]}
            onChange={(value) => handleChange("MainViewStyle-Primary", "background-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">친구/채팅탭 배경 이미지</div>
          <ImageFileButton
            onImageUpload={(file) => handleChange("MainViewStyle-Primary", "-ios-background-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={2}>
        <EditTableInnerRow>
          <div className="px-2 py-1">이름/타이틀 컬러</div>
          <ColorInput
            value={mv2Theme["MainViewStyle-Primary"]["-ios-text-color"]}
            onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">이름/타이틀 프레스 컬러</div>
          <ColorInput
            value={mv2Theme["MainViewStyle-Primary"]["-ios-highlighted-text-color"]}
            onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-highlighted-text-color", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={3}>
        <EditTableInnerRow>
          <div className="px-2 py-1">부가/상태메시지 컬러</div>
          <ColorInput
            value={mv2Theme["MainViewStyle-Primary"]["-ios-description-text-color"]}
            onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-description-text-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">부가/상태메시지 프레스 컬러</div>
          <ColorInput
            value={mv2Theme["MainViewStyle-Primary"]["-ios-description-highlighted-text-color"]}
            onChange={(value) =>
              handleChange("MainViewStyle-Primary", "-ios-description-highlighted-text-color", value)
            }
          />
        </EditTableInnerRow>
      </EditTableRow>

      {/* SectionTitleStyle-Main */}
      <SectionHeader title="SectionTitleStyle-Main" subtitle="리스트 섹션 타이틀" />
      <EditTableRow number={4}>
        <EditTableInnerRow>
          <div className="px-2 py-1">섹션 타이틀 컬러</div>
          <ColorInput
            value={mv2Theme["SectionTitleStyle-Main"]["-ios-text-color"]}
            onChange={(value) => handleChange("SectionTitleStyle-Main", "-ios-text-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">섹션 타이틀 투명도</div>
          <AlphaInput
            value={mv2Theme["SectionTitleStyle-Main"]["-ios-text-alpha"]}
            onChange={(value) => handleChange("SectionTitleStyle-Main", "-ios-text-alpha", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
      <EditTableRow number={5}>
        <EditTableInnerRow>
          <div className="px-2 py-1">보더 컬러</div>
          <ColorInput
            value={mv2Theme["SectionTitleStyle-Main"]["border-color"]}
            onChange={(value) => handleChange("SectionTitleStyle-Main", "border-color", value)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow>
          <div className="px-2 py-1">보더 투명도</div>
          <AlphaInput
            value={mv2Theme["SectionTitleStyle-Main"]["border-alpha"]}
            onChange={(value) => handleChange("SectionTitleStyle-Main", "border-alpha", value)}
          />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
