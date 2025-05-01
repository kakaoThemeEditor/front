import clsx from "clsx";
import CircleButton from "../button/CircleButton";
import ImageFileButton from "../button/ImageFileButton";
import { Input } from "../ui/input";

interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosFriendsNormalIconImage: string;
  iosFriendsSelectedIconImage: string;
  iosChatsNormalIconImage: string;
  iosChatsSelectedIconImage: string;
  iosOpenchatsNormalIconImage: string;
  iosOpenchatsSelectedIconImage: string;
  iosShoppingNormalIconImage: string;
  iosShoppingSelectedIconImage: string;
  iosMoreNormalIconImage: string;
  iosMoreSelectedIconImage: string;
}

export function TabBarEditTable({
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
  const handleChange = (key: keyof typeof themeValues, value: string | File) => {
    setThemeValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleActive = (key: keyof typeof isActive, value: boolean) => {
    setIsActive((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-2 items-center">
        <div className="px-2 py-1 text-xs font-bold">TabBarStyle-Main</div>
        <div className="px-2 py-1 text-xs font-bold">메인탭 스타일</div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={1} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">메인탭 배경 이미지</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosBackgroundImage", file)} />
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="px-2 py-1">메인탭 배경 컬러</div>
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
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={2} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className={clsx("grid grid-cols-2 items-center", isActive.iosFriendsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">친구탭 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosFriendsNormalIconImage", file)} />
          </div>
          <div className={clsx("grid grid-cols-2 items-center", !isActive.iosFriendsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">친구탭 선택 시 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosFriendsSelectedIconImage", file)} />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={3} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className={clsx("grid grid-cols-2 items-center", isActive.iosChatsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">채팅탭 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosChatsNormalIconImage", file)} />
          </div>
          <div className={clsx("grid grid-cols-2 items-center", !isActive.iosChatsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">채팅탭 선택 시 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosChatsSelectedIconImage", file)} />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={4} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className={clsx("grid grid-cols-2 items-center", isActive.iosOpenchatsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">오픈채팅탭 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosOpenchatsNormalIconImage", file)} />
          </div>
          <div className={clsx("grid grid-cols-2 items-center", !isActive.iosOpenchatsNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">오픈채팅탭 선택 시 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosOpenchatsSelectedIconImage", file)} />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={5} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className={clsx("grid grid-cols-2 items-center", isActive.iosShoppingNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">쇼핑탭 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosShoppingNormalIconImage", file)} />
          </div>
          <div className={clsx("grid grid-cols-2 items-center", !isActive.iosShoppingNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">쇼핑탭 선택 시 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosShoppingSelectedIconImage", file)} />
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="px-1">
          <CircleButton Number={6} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className={clsx("grid grid-cols-2 items-center", isActive.iosMoreNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">더보기탭 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosMoreNormalIconImage", file)} />
          </div>
          <div className={clsx("grid grid-cols-2 items-center", !isActive.iosMoreNormalIconImage && "bg-blue-50")}>
            <div className="px-2 py-1">더보기탭 선택 시 아이콘</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosMoreSelectedIconImage", file)} />
          </div>
        </div>
      </div>
    </div>
  );
}
