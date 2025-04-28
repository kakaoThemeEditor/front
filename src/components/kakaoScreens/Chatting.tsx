import { useState } from "react";
import { IoChevronBack, IoSearch, IoMenu } from "react-icons/io5";
// 편집 가능한 영역의 타입 정의
type EditableArea = {
  id: string;
  name: string;
  color: string;
  description: string;
};

export default function Chatting() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [areas, setAreas] = useState<EditableArea[]>([
    {
      id: "header",
      name: "헤더",
      color: "#FFFFFF",
      description: "카카오톡 상단 헤더 영역",
    },
    {
      id: "chatBackground",
      name: "채팅 배경",
      color: "#B2C7D9",
      description: "채팅방 배경색",
    },
    {
      id: "myMessage",
      name: "내 메시지",
      color: "#FEE500",
      description: "내가 보낸 메시지 배경색",
    },
    {
      id: "otherMessage",
      name: "상대방 메시지",
      color: "#FFFFFF",
      description: "상대방이 보낸 메시지 배경색",
    },
  ]);

  const handleColorChange = (color: string) => {
    if (!selectedArea) return;
    setAreas((prevAreas) =>
      prevAreas.map((area) =>
        area.id === selectedArea ? { ...area, color } : area
      )
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full">
      <div className="px-8 py-6 max-w-[500px] max-h-[700px]">
        <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
          {/* 헤더 */}
          <div
            className="h-14 flex items-center px-4 gap-3 relative"
            style={{
              backgroundColor: areas.find((area) => area.id === "header")
                ?.color,
            }}
            onClick={() => setSelectedArea("header")}
          >
            <IoChevronBack className="text-2xl" />
            <span className="text-base">강아지 아기</span>
            <div className="flex items-center gap-3 absolute right-4">
              <IoSearch className="text-2xl" />
              <IoMenu className="text-2xl" />
            </div>
          </div>

          {/* 채팅 영역 */}
          <div
            className="flex-1 p-4 overflow-y-auto"
            style={{
              backgroundColor: areas.find(
                (area) => area.id === "chatBackground"
              )?.color,
            }}
          >
            {/* 날짜 구분선 */}
            <div className="flex justify-center mb-6">
              <div className="bg-[#92A4B2] text-white text-xs px-2 py-1 rounded-full">
                2021년 8월 18일 수요일
              </div>
            </div>

            {/* 상대방 메시지 */}
            <div className="flex items-start gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm mb-1">강아지 아기</span>
                <div className="flex items-end gap-2">
                  <div
                    className="rounded-lg px-4 py-2 max-w-[70%]"
                    style={{
                      backgroundColor: areas.find(
                        (area) => area.id === "otherMessage"
                      )?.color,
                    }}
                    onClick={() => setSelectedArea("otherMessage")}
                  >
                    그래, 잘 지내
                  </div>
                  <span className="text-xs text-gray-500">23:19</span>
                </div>
              </div>
            </div>

            {/* 내 메시지 */}
            <div className="flex justify-end mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xs text-gray-500">23:20</span>
                <div
                  className="rounded-lg px-4 py-2 max-w-[70%]"
                  style={{
                    backgroundColor: areas.find(
                      (area) => area.id === "myMessage"
                    )?.color,
                  }}
                  onClick={() => setSelectedArea("myMessage")}
                >
                  다신 연락하지마
                </div>
              </div>
            </div>

            {/* 날짜 구분선 */}
            <div className="flex justify-center my-6">
              <div className="bg-[#92A4B2] text-white text-xs px-2 py-1 rounded-full">
                2021년 8월 19일 목요일
              </div>
            </div>

            {/* 추가 메시지들 */}
            <div className="flex items-start gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm mb-1">강아지 아기</span>
                <div className="flex items-end gap-2">
                  <div
                    className="rounded-lg px-4 py-2 max-w-[70%]"
                    style={{
                      backgroundColor: areas.find(
                        (area) => area.id === "otherMessage"
                      )?.color,
                    }}
                  >
                    나 차단했어?
                  </div>
                  <span className="text-xs text-gray-500">00:32</span>
                </div>
              </div>
            </div>
          </div>

          {/* 입력창 */}
          <div className="h-14 border-t flex items-center px-4 gap-2">
            <button className="w-8 h-8 flex items-center justify-center">
              <span className="text-2xl">+</span>
            </button>
            <input
              type="text"
              className="flex-1 h-10 rounded-full bg-gray-100 px-4"
              placeholder="메시지 입력"
            />
            <button className="w-8 h-8 flex items-center justify-center">
              😊
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              #
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4">테마 편집</h2>

          {selectedArea ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {areas.find((area) => area.id === selectedArea)?.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {areas.find((area) => area.id === selectedArea)?.description}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded cursor-pointer"
                  style={{
                    backgroundColor: areas.find(
                      (area) => area.id === selectedArea
                    )?.color,
                  }}
                  onClick={() => setShowColorPicker(!showColorPicker)}
                />
                <input
                  type="color"
                  value={areas.find((area) => area.id === selectedArea)?.color}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-24 h-8"
                />
              </div>
            </div>
          ) : (
            <p className="text-gray-500">편집할 영역을 클릭하세요</p>
          )}
        </div>
      </div>
      {/* 편집 컨트롤 끝 */}
    </div>
  );
}
