import clsx from "clsx";
import CircleButton from "../button/CircleButton";
import ImageFileButton from "../button/ImageFileButton";
import { Input } from "../ui/input";

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
    <div className="w-full text-xs text-left">
      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-3">
        <div className="px-2 py-1 text-xs font-bold">
          BackgroundStyle-Passcode
        </div>
        <div></div>
        <div className="px-2 py-1 text-xs font-bold">잠금화면 상단</div>
      </div>

      <div className="flex h-full items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={1} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid gird-cols-2">
            <div className="grid grid-cols-3 items-center">
              <div className="px-2 py-1">background-color</div>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="#FFFFFF"
                  className="border-none focus-visible:ring-0"
                  value={themeValues.backgroundColor}
                  onChange={(e) =>
                    handleChange("backgroundColor", e.target.value)
                  }
                />
                <input
                  type="color"
                  className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
                  value={themeValues.backgroundColor}
                  onChange={(e) =>
                    handleChange("backgroundColor", e.target.value)
                  }
                />
              </div>

              <div className="px-2 py-1">배경 컬러</div>
            </div>
            <div className="grid grid-cols-3 items-center">
              <div className="px-2 py-1 ">-ios-background-image</div>
              <ImageFileButton
                onImageUpload={(file) =>
                  handleChange("iosBackgroundImage", file)
                }
              />
              <div className="px-2 py-1">배경 이미지</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-3">
        <div className="px-2 py-1 font-bold text-xs">
          LabelStyle-PasscodeTitle
        </div>
        <div></div>
        <div className="px-2 py-1 font-bold text-xs">텍스트 컬러</div>
      </div>
      <div className="flex h-full items-center mb-6">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={2} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-text-color</div>
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
            <div className="px-2 py-1">텍스트 컬러</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-3">
        <div className="px-2 py-1 font-bold text-xs">PasscodeStyle</div>
        <div></div>
        <div className="px-2 py-1 font-bold text-xs">키패드</div>
      </div>
      <div className="flex h-full items-center ">
        <div
          className={clsx(
            "flex items-center justify-center w-4 h-4 cursor-pointer"
          )}
          onClick={() => setActiveSelected(false)}
        >
          <CircleButton
            Number={3}
            className={`text-xs  ${activeSelected ? "" : "bg-red-500"}`}
          />
        </div>
        <div className="flex-1 ">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-first-image</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletFirstImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-second-image</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletSecondImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-third-image</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletThirdImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-fourth-image</div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosBulletFourthImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지</div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center  bg-gray-100">
        <div
          className="flex items-center justify-center w-4 h-4 cursor-pointer"
          onClick={() => setActiveSelected(true)}
        >
          <CircleButton
            Number={4}
            className={`text-xs  ${activeSelected ? "bg-red-500" : ""}`}
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-selected-first-image</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedFirstImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-selected-second-image</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedSecondImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-selected-third-image</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedThirdImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-bullet-selected-fourth-image</div>
            <ImageFileButton
              className="hover:bg-white"
              onImageUpload={(file) =>
                handleChange("iosBulletSelectedFourthImage", file)
              }
            />
            <div className="px-2 py-1">잠금화면 불릿 이미지 - 입력</div>
          </div>
        </div>
      </div>

      <div className="flex h-full items-center  ">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={5} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-keypad-background-color</div>
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
            <div className="px-2 py-1">키패드 배경 컬러</div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center  bg-gray-100">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={6} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">-ios-keypad-text-normal-color</div>
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
            <div className="px-2 py-1">키패드 숫자 텍스트 컬러</div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center ">
        <div className="flex items-center justify-center w-4 h-4">
          <CircleButton Number={7} className="text-xs" />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 items-center">
            <div className="px-2 py-1">
              -ios-keypad-number-highlighted-image
            </div>
            <ImageFileButton
              onImageUpload={(file) =>
                handleChange("iosKeypadNumberHighlightedImage", file)
              }
            />
            <div className="px-2 py-1">키패드 프레스 컬러</div>
          </div>
        </div>
      </div>
    </div>
  );
}
