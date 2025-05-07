import { ColorInput } from "../common/ColorInput";
import { SectionHeader } from "../common/SectionHeader";
import { EditTableRow } from "../common/EditTableRow";
import ImageFileButton from "../button/ImageFileButton";
import { RotateCw } from "lucide-react";
import EditTableInnerRow from "../common/EditTableInnerRow";
import { IsActive, ThemeValues } from "../kakaoScreens/tabbar/type";
import { EditTableInnerRowTextCell } from "../common/EditTableInnerRowTextCell";

export function TabBarEditTable({
  themeValues,
  setThemeValues,
  isActive,
  setIsActive,
}: {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
  isActive: IsActive;
  setIsActive: React.Dispatch<React.SetStateAction<IsActive>>;
}) {
  const handleChange = (
    key: keyof ThemeValues,
    subKey:
      | keyof ThemeValues["TabbarStyle-Main"]
      | keyof ThemeValues["DefaultProfileStyle"]
      | keyof ThemeValues["FeatureStyle-Primary"],
    value: string | File
  ) => {
    setThemeValues((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: value,
      },
    }));
  };

  const handleActive = (key: keyof IsActive, subKey: keyof IsActive["TabbarStyle-Main"], value: boolean) => {
    setIsActive((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: value,
      },
    }));
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="TabBarStyle-Main" subtitle="메인탭 스타일" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">메인탭 배경 이미지</div>
          <ImageFileButton onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-background-image", file)} />
        </EditTableInnerRow>

        <EditTableInnerRow>
          <div className="px-2 py-1">메인탭 배경 컬러</div>
          <ColorInput
            value={themeValues["TabbarStyle-Main"]["background-color"]}
            onChange={(value) => handleChange("TabbarStyle-Main", "-ios-background-image", value)}
          />
          <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
            <RotateCw className="w-5 h-5" />
          </div>
        </EditTableInnerRow>
      </EditTableRow>

      {/* 2 */}
      <EditTableRow number={2}>
        <EditTableInnerRow isActive={isActive["TabbarStyle-Main"]["-ios-friends-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="친구탭 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-friends-normal-icon-image", true)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-friends-normal-icon-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["TabbarStyle-Main"]["-ios-friends-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="친구탭 선택 시 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-friends-normal-icon-image", false)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-friends-normal-icon-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={3}>
        <EditTableInnerRow isActive={isActive["TabbarStyle-Main"]["-ios-chats-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="채팅탭 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-chats-normal-icon-image", true)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-chats-normal-icon-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["TabbarStyle-Main"]["-ios-chats-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="채팅탭 선택 시 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-chats-normal-icon-image", false)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-chats-normal-icon-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={4}>
        <EditTableInnerRow isActive={isActive["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="오픈채팅탭 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-openchats-normal-icon-image", true)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-openchats-normal-icon-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["TabbarStyle-Main"]["-ios-openchats-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="오픈채팅탭 선택 시 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-openchats-normal-icon-image", false)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-openchats-normal-icon-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={5}>
        <EditTableInnerRow isActive={isActive["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="쇼핑탭 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-shopping-normal-icon-image", true)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-shopping-normal-icon-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["TabbarStyle-Main"]["-ios-shopping-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="쇼핑탭 선택 시 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-shopping-normal-icon-image", false)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-shopping-normal-icon-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <EditTableRow number={6}>
        <EditTableInnerRow isActive={isActive["TabbarStyle-Main"]["-ios-more-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="더보기탭 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-more-normal-icon-image", true)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-more-normal-icon-image", file)}
          />
        </EditTableInnerRow>
        <EditTableInnerRow isActive={!isActive["TabbarStyle-Main"]["-ios-more-normal-icon-image"]}>
          {/*  */}
          <EditTableInnerRowTextCell
            children="더보기탭 선택 시 아이콘"
            onClick={() => handleActive("TabbarStyle-Main", "-ios-more-normal-icon-image", false)}
          />
          <ImageFileButton
            onImageUpload={(file) => handleChange("TabbarStyle-Main", "-ios-more-normal-icon-image", file)}
          />
        </EditTableInnerRow>
      </EditTableRow>

      <div className="mt-4">
        <SectionHeader title="DefaultProfile" subtitle="" />
        <EditTableRow number={7}>
          <EditTableInnerRow>
            <div className="px-2 py-1">테마 기본 프로필 이미지</div>
            <ImageFileButton
              onImageUpload={(file) => handleChange("DefaultProfileStyle", "-ios-background-image", file)}
            />
          </EditTableInnerRow>
        </EditTableRow>
      </div>

      <div className="mt-4">
        <SectionHeader title="Feature" subtitle="" />
        <EditTableRow number={8}>
          <EditTableInnerRow>
            <div className="px-2 py-1">서비스 버튼 컬러</div>
            <ColorInput
              value={themeValues["FeatureStyle-Primary"]["-ios-text-color"]}
              onChange={(value) => handleChange("FeatureStyle-Primary", "-ios-text-color", value)}
            />
          </EditTableInnerRow>
        </EditTableRow>
      </div>
    </div>
  );
}
