import { useState } from "react";
import {
  IoChevronBack,
  IoSearch,
  IoMenu,
  IoBackspaceOutline,
} from "react-icons/io5";
import SpeechBubble from "../ui/SpeechBubble";

// 편집 가능한 영역의 타입 정의
type EditableArea = {
  id: string;
  name: string;
  color: string;
  description: string;
};

export default function PassCode() {
  const KeyPad = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "",
    "0",
    "delete",
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full">
      {/* 왼쪽 */}
      <div className="flex justify-center items-center">
        <div
          className="h-[700px] w-[360px] bg-white rounded-2xl p-[2px]"
          style={{
            boxShadow: `
            4px 4px 12px rgba(0,0,0,0.15), 
            -4px -4px 8px rgba(0,0,0,0.1)
          `,
          }}
        >
          <div className="relative flex flex-col justify-center size-full bg-red-200 rounded-2xl border-2 border-white">
            <div className="absolute top-7 left-5 w-5 h-5 bg-kakao-blue rounded-full flex justify-center items-center text-white text-sm font-bold border-[1px] border-white">
              1
            </div>
            <div className="h-3/5  flex flex-col justify-center items-center">
              <div className="relative">
                <div className="absolute top-7 -left-11 w-10 h-4">
                  <SpeechBubble direction="right">2</SpeechBubble>
                </div>
                <div className="text-2xl font-bold mt-8 mb-4">비밀번호</div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                카카오톡 암호를 입력해주세요.
              </div>
              <div className="flex gap-2">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    ></div>
                  ))}
              </div>
            </div>
            <div className="h-2/5 border-3 border-kakao-blue rounded-2xl p-3 grid grid-cols-3 gap-2">
              {KeyPad.map((key, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center font-bold text-xl"
                >
                  {key === "delete" ? (
                    <IoBackspaceOutline className="text-2xl" />
                  ) : (
                    key
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 왼쪽 끝 */}
      {/* 오른쪽 */}
      <div className="w-full h-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">테마 편집</h2>
      </div>
    </div>
  );
}
