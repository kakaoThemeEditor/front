import CircleButton from "../button/CircleButton";
import { Input } from "../ui/input";

interface ThemeValues {
  iosTextColor: string;
}

export default function MainviewStyle1EditTable({
  themeValues,
  setThemeValues,
}: {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
}) {
  const handleChange = (key: keyof typeof themeValues, value: string) => {
    setThemeValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className="w-full text-xs text-left">
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-3">
        <div className="px-2 py-1 text-xs font-bold">TabBarStyle-Main</div>
        <div className="px-2 py-1 text-xs font-bold">메인탭 스타일</div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={1} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">background-color</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#FFFFFF"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosTextColor}
                onChange={(e) => handleChange("iosTextColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosTextColor}
                onChange={(e) => handleChange("iosTextColor", e.target.value)}
              />
            </div>
            <div className="px-2 py-1">메인탭 배경 컬러</div>
          </div>
        </div>
      </div>
    </div>
  );
}
