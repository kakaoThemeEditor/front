import React from "react";

const SpeechBubble = ({
  direction = "bottom",
  children,
}: {
  direction: string;
  children: React.ReactNode;
}) => {
  let arrowStyles = "";

  // 말풍선의 방향에 따른 화살표 스타일 적용
  if (direction === "top") {
    arrowStyles =
      "border-none border-b-kakao-blue top-1/2 -mt-5 -right-2 -mr-5";
  } else if (direction === "bottom") {
    arrowStyles =
      "border-none border-t-kakao-blue top-1/2 -mt-5 -right-2 -mr-5";
  } else if (direction === "left") {
    arrowStyles =
      "border-none border-r-kakao-blue top-1/2 -mt-5 -right-2 -mr-5";
  } else if (direction === "right") {
    arrowStyles =
      "border-none border-l-kakao-blue top-1/2 -mt-2.5 right-1 -mr-5";
  }

  return (
    <div className="relative bg-kakao-blue text-white rounded-lg py-1 flex justify-center items-center max-w-[200px]">
      {children}
      <div
        className={`absolute w-0 h-0 border-[10px] border-solid border-transparent   ${arrowStyles}`}
      />
    </div>
  );
};

export default SpeechBubble;
