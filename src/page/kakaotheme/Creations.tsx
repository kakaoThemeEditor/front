import { useEditorStore } from "@/store/editorStore";
import { KakaoPhoneFrame } from "@/components/kakaoScreens/preview/KakaoPhoneFrame";
import { MV1Header } from "@/components/kakaoScreens/MainViewStyle1/MV1Header";
import { MV1ChatList } from "@/components/kakaoScreens/MainViewStyle1/MV1ChatList";
import { AdButton } from "@/components/kakaoScreens/preview/AdButton";
import { PreviewBottom } from "@/components/kakaoScreens/preview/PreviewBottom";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { APIClient } from "@/api/ApiHandler";
import { toast } from "sonner";
import { AxiosResponse } from "axios";

export const Creations = () => {
  const { themeList } = useEditorStore();
  const navigate = useNavigate();

  const { mutate: downloadTheme } = useMutation({
    mutationFn: async (themeId: string) => {
      const response = await APIClient.post(
        `/theme/download`,
        { themeId },
        {
          responseType: "blob",
        }
      );
      return response;
    },
    onSuccess: (response: AxiosResponse, themeId: string) => {
      // 현재 테마 이름 찾기
      const theme = themeList.find((t) => t.themeId === themeId);
      const themeName = theme?.themeName || "theme";

      // Blob 생성 및 다운로드
      const blob = new Blob([response.data], { type: "application/zip" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${themeName}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("테마 다운로드 완료");
    },
    onError: () => {
      toast.error("테마 다운로드 실패");
    },
  });

  const handleDownload = (e: React.MouseEvent, themeId: string) => {
    e.stopPropagation();
    downloadTheme(themeId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">제작한 테마</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {themeList.map((theme) => (
          <div
            key={theme.themeId}
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
            onClick={() => navigate(`/editor/kakao/${theme.themeId}/MainViewStyle1`)}
          >
            <div className="px-3 py-1.5 flex justify-between items-center">
              <h2 className="text-sm font-medium truncate">{theme.themeName}</h2>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-gray-100"
                onClick={(e) => handleDownload(e, theme.themeId)}
              >
                <Download className="w-3 h-3 xl:h-4 xl:w-4" />
              </Button>
            </div>
            <div className="relative w-full flex justify-center items-center h-[260px] bg-gray-50">
              <div className="scale-[0.4]">
                <KakaoPhoneFrame>
                  <MV1Header />
                  <AdButton isBorder={false}>광고하기</AdButton>
                  <MV1ChatList />
                  <PreviewBottom />
                </KakaoPhoneFrame>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
