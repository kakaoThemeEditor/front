import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { MainViewStyle1Theme } from "./type";
import { AlphaInput } from "../../input/AlphaInput";
import { RotateCw } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

export default function MainviewStyle1EditTable() {
  const { mv1Theme, setMv1Theme } = useThemeStore();

  const handleChange = (
    key: keyof MainViewStyle1Theme,
    subKey: keyof MainViewStyle1Theme["HeaderStyle-Main"] | keyof MainViewStyle1Theme["MainViewStyle-Primary"],
    value: string | number
  ) => {
    setMv1Theme({
      ...mv1Theme,
      [key]: {
        ...mv1Theme[key],
        [subKey]: value,
      },
    });
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="Header" subtitle="헤더 스타일" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">헤더 텍스트 컬러</div>
          <ColorInput
            value={mv1Theme["HeaderStyle-Main"]["-ios-text-color"]}
            onChange={(value) => handleChange("HeaderStyle-Main", "-ios-text-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>

      <div className="mt-4">
        <SectionHeader title="ChattingList" subtitle="채팅 목록" />

        <EditTableRow number={2}>
          <EditTableInnerRow>
            <div className="px-2 py-1">설명/라스트메시지 컬러</div>
            <ColorInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-paragraph-text-color"]}
              onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-paragraph-text-color", value)}
            />
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </EditTableInnerRow>
          <EditTableInnerRow>
            <div className="px-2 py-1">설명/라스트메시지 프레스 컬러</div>
            <ColorInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-paragraph-highlighted-text-color"]}
              onChange={(value) =>
                handleChange("MainViewStyle-Primary", "-ios-paragraph-highlighted-text-color", value)
              }
            />
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </EditTableInnerRow>
        </EditTableRow>

        <EditTableRow number={3}>
          <EditTableInnerRow>
            <div className="px-2 py-1">리스트 배경 컬러</div>
            <ColorInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-normal-background-color"]}
              onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-normal-background-color", value)}
            />
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </EditTableInnerRow>
          <EditTableInnerRow>
            <div className="px-2 py-1">리스트 배경 투명도</div>
            <AlphaInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-normal-background-alpha"]}
              onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-normal-background-alpha", value)}
            />
          </EditTableInnerRow>
        </EditTableRow>

        <EditTableRow number={4}>
          <EditTableInnerRow>
            <div className="px-2 py-1">리스트 배경 프레스 컬러</div>
            <ColorInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-selected-background-color"]}
              onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-selected-background-color", value)}
            />
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </EditTableInnerRow>
          <EditTableInnerRow>
            <div className="px-2 py-1">리스트 배경 프레스 투명도</div>
            <AlphaInput
              value={mv1Theme["MainViewStyle-Primary"]["-ios-selected-background-alpha"]}
              onChange={(value) => handleChange("MainViewStyle-Primary", "-ios-selected-background-alpha", value)}
            />
          </EditTableInnerRow>
        </EditTableRow>
      </div>
    </div>
  );
}
