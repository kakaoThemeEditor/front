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
    <div className="w-full xl:w-11/12  p-6 bg-white  overflow-auto mx-auto">
      <div className="flex justify-between mb-4 w-full ">
        <ThemeStyleDropDown />
        <Button size="sm" className="text-xs">
          저장하기
        </Button>
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
