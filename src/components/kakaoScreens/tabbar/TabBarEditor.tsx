import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { TabBarEditTable } from "./TabBarEditTable";
import { IsActive } from "./type";

export function TabBarEditor({
  isActive,
  setIsActive,
}: {
  isActive: IsActive;
  setIsActive: (isActive: IsActive) => void;
}) {
  return (
    <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
      <div className="flex justify-between mb-4 w-full">
        <ThemeStyleDropDown />
        <Button size="sm" className="text-xs">
          저장하기
        </Button>
      </div>
      <TabBarEditTable isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
