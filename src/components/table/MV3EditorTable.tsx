import CircleButton from "../button/CircleButton";
import ImageFileButton from "../button/ImageFileButton";
import { Input } from "../ui/input";
import { ThemeValues } from "../kakaoScreens/MainViewStyle2/MainviewStyle2";

export function MV3EditorTable({
  themeValues,
  setThemeValues,
  isActive,
  setIsActive,
}: {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
  isActive: { [key: string]: boolean };
  setIsActive: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}) {
  const handleChange = (key: keyof typeof themeValues, value: string | number | File) => {
    setThemeValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      {/* MainViewStyle-Primary */}
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-2 items-center">
        <div className="px-2 py-1 text-xs font-bold">MainViewStyle-Primary</div>
        <div className="px-2 py-1 text-xs font-bold">기본 메인/바디 스타일</div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={1} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">배경 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#FFFFFF"
                className="border-none focus-visible:ring-0"
                value={themeValues.backgroundColor}
                onChange={(e) => handleChange("backgroundColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.backgroundColor}
                onChange={(e) => handleChange("backgroundColor", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">배경 이미지</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosBackgroundImage", file)} />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={2} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">이름/타이틀 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
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
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">이름/타이틀 프레스 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosHighlightedTextColor}
                onChange={(e) => handleChange("iosHighlightedTextColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosHighlightedTextColor}
                onChange={(e) => handleChange("iosHighlightedTextColor", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={3} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">부가/상태메시지 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosDescriptionTextColor}
                onChange={(e) => handleChange("iosDescriptionTextColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosDescriptionTextColor}
                onChange={(e) => handleChange("iosDescriptionTextColor", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">부가/상태메시지 프레스 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosDescriptionHighlightedTextColor}
                onChange={(e) => handleChange("iosDescriptionHighlightedTextColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosDescriptionHighlightedTextColor}
                onChange={(e) => handleChange("iosDescriptionHighlightedTextColor", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SectionTitleStyle-Main */}
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-2 items-center">
        <div className="px-2 py-1 text-xs font-bold">SectionTitleStyle-Main</div>
        <div className="px-2 py-1 text-xs font-bold">리스트 섹션 타이틀</div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={7} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">보더 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
                className="border-none focus-visible:ring-0"
                value={themeValues.SectionTitleBorderColor}
                onChange={(e) => handleChange("SectionTitleBorderColor", e.target.value)}
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.SectionTitleBorderColor}
                onChange={(e) => handleChange("SectionTitleBorderColor", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">보더 투명도</div>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                min="0"
                max="1"
                step="0.01"
                className="border-none focus-visible:ring-0"
                value={themeValues.SectionTitleBorderAlpha}
                onChange={(e) => handleChange("SectionTitleBorderAlpha", parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={8} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">섹션 타이틀 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#000000"
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
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">섹션 타이틀 투명도</div>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                min="0"
                max="1"
                step="0.01"
                className="border-none focus-visible:ring-0"
                value={themeValues.SectionTitleTextAlpha}
                onChange={(e) => handleChange("SectionTitleTextAlpha", parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
