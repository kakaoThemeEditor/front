import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import MainviewStyle1EditTable from "@/components/kakaoScreens/MainViewStyle1/MainviewStyle1EditTable";
import { MainViewStyle1Theme } from "./type";

export function MV1Editor() {
  return (
    <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
      <div className="flex justify-between mb-4">
        <ThemeStyleDropDown />
        <Button size="sm" className="text-xs">
          저장하기
        </Button>
      </div>
      <MainviewStyle1EditTable />
    </div>
  );
}
