import clsx from "clsx";
import CircleButton from "../button/CircleButton";
import ImageFileButton from "../button/ImageFileButton";
import { Input } from "../ui/input";
import { RotateCw } from "lucide-react";
interface ThemeValues {
  backgroundColor: string;
  iosBackgroundImage: string;
  iosTextColor: string;
  iosBulletFirstImage: string;
  iosBulletSecondImage: string;
  iosBulletThirdImage: string;
  iosBulletFourthImage: string;
  iosBulletSelectedFirstImage: string;
  iosBulletSelectedSecondImage: string;
  iosBulletSelectedThirdImage: string;
  iosBulletSelectedFourthImage: string;
  iosKeypadBackgroundColor: string;
  iosKeypadTextNormalColor: string;
  iosKeypadNumberHighlightedImage: string;
}

export function PassCodeEditTable({
  themeValues,
  setThemeValues,
  activeSelected,
  setActiveSelected,
}: {
  themeValues: ThemeValues;
  setThemeValues: React.Dispatch<React.SetStateAction<ThemeValues>>;
  activeSelected: boolean;
  setActiveSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleChange = (
    key: keyof typeof themeValues,
    value: string | File
  ) => {
    setThemeValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-full text-[10px] xl:text-xs text-left">
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-[3fr_4fr_1fr] items-center">
        <div className="px-2 py-1 text-xs font-bold">잠금화면 상단</div>
        <div className="px-2 py-1 text-xs font-bold">색상, 이미지</div>
        <div className=""></div>
      </div>

      <div className="flex h-full items-center mb-6">
        <div className="px-1">
          <CircleButton Number={1} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">배경 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#FFFFFF"
                className="border-none focus-visible:ring-0 "
                value={themeValues.backgroundColor}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
              />
              <input
                type="color"
                className="w-9 h-9 px-[2px] appearance-none border-2 border-white cursor-pointer"
                value={themeValues.backgroundColor}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
              />
            </div>
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">배경 이미지</div>
            <ImageFileButton
              onImageUpload={(file) => handleChange("iosBackgroundImage", file)}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-[3fr_4fr_1fr] items-center">
        <div className="px-2 py-1 font-bold text-xs">
          LabelStyle-PasscodeTitle
        </div>
        <div className="px-2 py-1 font-bold text-xs">텍스트 컬러</div>
      </div>
      <div className="flex h-full items-center mb-6">
        <div className="px-1">
          <CircleButton Number={2} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center ">
            <div className="px-2 py-1">텍스트 컬러</div>
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
          </div>
        </div>
        <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
          <RotateCw className="w-5 h-5" />
        </div>
      </div>

      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-[3fr_4fr_1fr] items-center">
        <div className="px-2 py-1 font-bold text-xs">PasscodeStyle</div>
        <div className="px-2 py-1 font-bold text-xs">키패드</div>
      </div>
      <div className="flex h-full items-center">
        <div
          className={clsx(
            "flex items-center justify-center px-1 cursor-pointer"
          )}
          onClick={() => setActiveSelected(false)}
        >
          <CircleButton
            Number={3}
            className={`${activeSelected ? "" : "bg-red-500"}`}
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletFirstImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletSecondImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletThirdImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletFourthImage", file)
              }
            />
          </div>
        </div>
      </div>
      <div className="flex h-full items-center bg-gray-100">
        <div
          className="flex items-center justify-center px-1 cursor-pointer"
          onClick={() => setActiveSelected(true)}
        >
          <CircleButton
            Number={4}
            className={`  ${activeSelected ? "bg-red-500" : ""}`}
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedFirstImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedSecondImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedThirdImage", file)
              }
            />
          </div>
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedFourthImage", file)
              }
            />
          </div>
        </div>
      </div>

      <div className="flex h-full items-center">
        <div className="px-1">
          <CircleButton Number={5} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">키패드 배경 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#FFFFFF"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosKeypadBackgroundColor}
                onChange={(e) =>
                  handleChange("iosKeypadBackgroundColor", e.target.value)
                }
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosKeypadBackgroundColor}
                onChange={(e) =>
                  handleChange("iosKeypadBackgroundColor", e.target.value)
                }
              />
            </div>
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center bg-gray-100">
        <div className="px-1">
          <CircleButton Number={6} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">키패드 숫자 텍스트 컬러</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="#FFFFFF"
                className="border-none focus-visible:ring-0"
                value={themeValues.iosKeypadTextNormalColor}
                onChange={(e) =>
                  handleChange("iosKeypadTextNormalColor", e.target.value)
                }
              />
              <input
                type="color"
                className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                value={themeValues.iosKeypadTextNormalColor}
                onChange={(e) =>
                  handleChange("iosKeypadTextNormalColor", e.target.value)
                }
              />
            </div>
            <div className="p-1 bg-gray-100 w-fit rounded-md ml-auto mr-4">
              <RotateCw className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center">
        <div className="px-1">
          <CircleButton Number={7} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-[3fr_4fr_1fr] items-center">
            <div className="px-2 py-1">키패드 프레스 컬러</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosKeypadNumberHighlightedImage", file)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
