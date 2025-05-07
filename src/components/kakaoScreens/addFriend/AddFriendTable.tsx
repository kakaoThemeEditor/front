import { ColorInput } from "../../input/ColorInput";
import { SectionHeader } from "../table/SectionHeader";
import { EditTableRow } from "../table/EditTableRow";
import ImageFileButton from "../../input/ImageFileButton";
import { RotateCw } from "lucide-react";
import EditTableInnerRow from "../table/EditTableInnerRow";
import { AddFriendType } from "./type";

export function AddFriendTable({
  themeValues,
  setThemeValues,
}: {
  themeValues: AddFriendType;
  setThemeValues: React.Dispatch<React.SetStateAction<AddFriendType>>;
}) {
  const handleChange = (
    key: keyof AddFriendType,
    subKey: keyof AddFriendType["ButtonStyle-AddFriend"],
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

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <SectionHeader title="잠금화면 상단" subtitle="색상, 이미지" />

      <EditTableRow number={1}>
        <EditTableInnerRow>
          <div className="px-2 py-1">배경 이미지</div>
          <ImageFileButton onImageUpload={(file) => handleChange("ButtonStyle-AddFriend", "-ios-image", file)} />
        </EditTableInnerRow>
      </EditTableRow>
    </div>
  );
}
