import { ThemeValues } from "./PassCode";
import { Button } from "../../ui/button";
import { ThemeStyleDropDown } from "../../dropdown-menu/ThemeStyleDropDown";
import { PassCodeEditTable } from "../../table/PassCodeEditTable";

interface PassCodeEditorProps {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
  activeSelected: boolean;
  setActiveSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PassCodeEditor({
  themeValues,
  setThemeValues,
  activeSelected,
  setActiveSelected,
}: PassCodeEditorProps) {
  return (
    <div className="w-full p-6 bg-white border-l-2 border-l-gray-100 overflow-auto">
      <div className="flex justify-between mb-4">
        <ThemeStyleDropDown />
        <Button>저장하기</Button>
      </div>
      <PassCodeEditTable
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        activeSelected={activeSelected}
        setActiveSelected={setActiveSelected}
      />
    </div>
  );
}
