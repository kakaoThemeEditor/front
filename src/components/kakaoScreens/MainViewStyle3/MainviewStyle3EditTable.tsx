import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { MainViewStyleSecondary } from "./type";
import { RotateCw } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";

export default function MainviewStyle3EditTable() {
  const { mvSecondary, setMvSecondary } = useThemeStore();

  const handleChange = (
    key: keyof MainViewStyleSecondary,
    subKey: keyof MainViewStyleSecondary["MainViewStyle-Secondary"],
    value: string
  ) => {
    setMvSecondary({
      ...mvSecondary,
      [key]: {
        ...mvSecondary[key],
        [subKey]: value,
      },
    });
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="MainViewStyle-Secondary" subtitle="" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">3/4탭 배경색 </div>
          <ColorInput
            value={mvSecondary["MainViewStyle-Secondary"]["background-color"]}
            onChange={(value) => handleChange("MainViewStyle-Secondary", "background-color", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
