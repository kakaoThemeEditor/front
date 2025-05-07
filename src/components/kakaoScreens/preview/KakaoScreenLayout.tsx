import React from "react";
import { useWindowHeight } from "../../../hooks/use-window-height";
interface KakaoScreenLayoutProps {
  editor: React.ReactNode;
  preview: React.ReactNode;
}

export const KakaoScreenLayout = ({ editor, preview }: KakaoScreenLayoutProps) => {
  const { shouldAddPadding, paddingValue } = useWindowHeight();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] w-full h-full xl:h-[calc(100vh-36px)] text-sm">
      {/* 왼쪽 프리뷰 */}
      <div
        className="relative flex justify-center items-center min-h-[calc(100vh-36px)] overflow-auto bg-white border-r-2 border-r-gray-100"
        style={{
          paddingTop: shouldAddPadding ? `${paddingValue * 1.5}px` : "0",
          paddingBottom: shouldAddPadding ? `${paddingValue * 0.5}px` : "0",
        }}
      >
        {preview}
      </div>
      {/* 오른쪽 에디터 */}
      {/* bg-gray-50 vs bg-white */}
      <div className=" p-4 overflow-auto">{editor}</div>
    </div>
  );
};
