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
}: {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
}) {
  const handleChange = (key: keyof typeof themeValues, value: string | File) => {
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
            <div className="px-2 py-1">-ios-background-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosBackgroundImage", file)} />
            <div className="px-2 py-1">메인탭 배경 이미지</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">background-color</div>
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
            <div className="px-2 py-1">메인탭 배경 컬러</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={2} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-friends-normal-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosFriendsNormalIconImage", file)} />
            <div className="px-2 py-1">친구탭 아이콘</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-friends-selected-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosFriendsSelectedIconImage", file)} />
            <div className="px-2 py-1">친구탭 선택 시 아이콘</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={3} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-chats-normal-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosChatsNormalIconImage", file)} />
            <div className="px-2 py-1">채팅탭 아이콘</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-chats-selected-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosChatsSelectedIconImage", file)} />
            <div className="px-2 py-1">채팅탭 선택 시 아이콘</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={4} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-openchats-normal-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosOpenchatsNormalIconImage", file)} />
            <div className="px-2 py-1">오픈채팅탭 아이콘</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-openchats-selected-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosOpenchatsSelectedIconImage", file)} />
            <div className="px-2 py-1">오픈채팅탭 선택 시 아이콘</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={5} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-shopping-normal-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosShoppingNormalIconImage", file)} />
            <div className="px-2 py-1">쇼핑탭 아이콘</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-shopping-selected-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosShoppingSelectedIconImage", file)} />
            <div className="px-2 py-1">쇼핑탭 선택 시 아이콘</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={6} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-more-normal-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosMoreNormalIconImage", file)} />
            <div className="px-2 py-1">더보기탭 아이콘</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="px-2 py-1">-ios-more-selected-icon-image</div>
            <ImageFileButton onImageUpload={(file) => handleChange("iosMoreSelectedIconImage", file)} />
            <div className="px-2 py-1">더보기탭 선택 시 아이콘</div>
          </div>
        </div>
      </div>
    </div>
  );
}
