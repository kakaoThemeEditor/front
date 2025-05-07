import { Button } from "@/components/ui/button";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { MainViewStyle2Theme } from "./type";
import { MV2EditorTable } from "@/components/kakaoScreens/MainViewStyle2/MV2EditorTable";

export function MV2Editor({}: {}) {
  return (
    <div className="w-full xl:w-11/12 mx-auto p-6  overflow-auto">
      <div className="flex justify-between mb-4">
        <ThemeStyleDropDown />
        <Button>저장하기</Button>
      </div>
      <MV2EditorTable />
    </div>
  );
}
