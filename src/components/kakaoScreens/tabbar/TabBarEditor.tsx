import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { TabBarEditTable } from "@/components/table/TabBarEditTable";
import { ThemeValues } from "./TabBar";

interface TabBarEditorProps {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
  isActive: { [key: string]: boolean };
  setIsActive: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

export function TabBarEditor({ themeValues, setThemeValues, isActive, setIsActive }: TabBarEditorProps) {
  return (
    <div className="w-full p-6 bg-white border-l-2 border-l-gray-100 overflow-auto">
      <div className="flex justify-between mb-4">
        <ThemeStyleDropDown />
        <Button>저장하기</Button>
      </div>
      <TabBarEditTable
        themeValues={themeValues}
        setThemeValues={setThemeValues}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}
