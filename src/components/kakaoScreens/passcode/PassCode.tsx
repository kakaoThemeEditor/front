import { useEffect, useRef, useState } from "react";
import { KakaoScreenLayout } from "@/components/kakaoScreens/preview/KakaoScreenLayout";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { PasscodeTheme } from "./type";
import { ThemeStyleDropDown } from "@/components/dropdown-menu/ThemeStyleDropDown";
import { Button } from "@/components/ui/button";
import { PassCodeEditTable } from "./PassCodeEditTable";
import CircleButton from "@/components/button/CircleButton";
import clsx from "clsx";
import SpeechBubble from "@/components/button/SpeechBubble";
import { PassCodeBullets } from "./PassCodeBullets";
import { PassCodeKeypad } from "./PassCodeKeypad";
import { useThemeStore } from "@/store/themeStore";
import { useEditorStore } from "@/store/editorStore";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";

export default function PassCode() {
  const [activeSelected, setActiveSelected] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);
  const { passcode, setPasscode } = useThemeStore();
  const { currentThemeId } = useEditorStore();
  const isFirstRender = useRef(true);

  // const isThemeEmpty = () => {
  //   if (Object.keys(messageNotification).length === 0) return true;
  //   return Object.values(messageNotification).every((style) => Object.values(style).every((value) => value === ""));
  // };

  const { mutate: getPasscode } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/getStyle", {
        themeId: currentThemeId,
        styleType: "PassCode",
      }),
    onSuccess: (data) => {
      const theme: Partial<PasscodeTheme> = {};

      data.data.styleDataList.forEach((themeData: any, idx: number) => {
        const parsed = JSON.parse(themeData.themeData);
        const name = themeData.themeDataName.replace("_", "-");
        theme[name as keyof PasscodeTheme] = parsed;
      });

      console.log("data.data.styleDataList", data.data.styleDataList);
      setPasscode(theme as PasscodeTheme);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  const { mutate: updateTheme } = useMutation({
    mutationFn: () =>
      APIClient.post("/themeStyle/update", {
        themeId: currentThemeId,
        styleTypeMap: {
          Passcode: Object.entries(passcode).map(([key, value]) => ({
            themeDataName: key.replace("-", "_"),
            themeData: JSON.stringify(value),
          })),
        },
      }),
    onSuccess: () => {
      toast.success("테마 저장 완료");
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      getPasscode();
    },
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!currentThemeId) {
        queryClient.invalidateQueries({ queryKey: ["themeList"] });
        return;
      }
      getPasscode();
      return;
    }

    if (!currentThemeId) {
      queryClient.invalidateQueries({ queryKey: ["themeList"] });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    getPasscode();
  }, [currentThemeId]);

  return (
    <>
      <KakaoScreenLayout
        editor={
          <div className="w-full xl:w-11/12  p-6 overflow-auto mx-auto">
            <div className="flex justify-between mb-4 w-full ">
              <ThemeStyleDropDown />
              <Button size="sm" className="text-xs">
                저장하기
              </Button>
            </div>
            <PassCodeEditTable activeSelected={activeSelected} setActiveSelected={setActiveSelected} />
          </div>
        }
        preview={
          <KakaoPhoneFrame>
            <div className="w-5 h-5 absolute top-7 left-5">
              <CircleButton Number={1} />
            </div>
            <div
              className={clsx(
                "h-3/5 flex flex-col justify-center items-center rounded-t-2xl",
                passcode["BackgroundStyle-Passcode"]["background-color"] || "bg-red-100"
              )}
              style={{
                backgroundColor: passcode["BackgroundStyle-Passcode"]["background-color"],
                backgroundImage: `url(${passcode["BackgroundStyle-Passcode"]["-ios-background-image"]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative">
                <div className="absolute top-9.5 -left-9 w-8 h-4">
                  <SpeechBubble direction="right">2</SpeechBubble>
                </div>
                <div
                  className={clsx(
                    "text-base xl:text-lg font-bold mt-8 mb-2",
                    passcode["LabelStyle-PasscodeTitle"]["-ios-text-color"] || "text-black"
                  )}
                  style={{
                    color: passcode["LabelStyle-PasscodeTitle"]["-ios-text-color"],
                  }}
                >
                  비밀번호
                </div>
              </div>
              <div className="text-[11px] xl:text-xs text-gray-600 mb-4">카카오톡 암호를 입력해주세요.</div>
              <PassCodeBullets passcode={passcode} activeSelected={activeSelected} />
            </div>
            <PassCodeKeypad passcode={passcode} />
          </KakaoPhoneFrame>
        }
      />
    </>
  );
}
