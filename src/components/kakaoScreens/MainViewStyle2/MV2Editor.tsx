import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { MainViewStyle2Theme } from "./type";
import { MV2EditorTable } from "@/components/table/MV2EditorTable";

interface MV2EditorProps {
  themeValues: MainViewStyle2Theme;
  setThemeValues: React.Dispatch<React.SetStateAction<MainViewStyle2Theme>>;
  isActive: { [key: string]: boolean };
  setIsActive: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

export function MV2Editor({ themeValues, setThemeValues, isActive, setIsActive }: MV2EditorProps) {
  return (
    <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
      <div className="flex justify-between mb-4">
        <ThemeStyleDropDown />
        <Button>저장하기</Button>
      </div>
      <MV2EditorTable
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
