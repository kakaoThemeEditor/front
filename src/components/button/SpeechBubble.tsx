import React from "react";
import clsx from "clsx";
const SpeechBubble = ({
  direction = "bottom",
  className,
  children,
}: {
  direction: string;
  className?: string;
  children: React.ReactNode;
}) => {
  let arrowStyles = "";

  // 말풍선의 방향에 따른 화살표 스타일 적용
  if (direction === "top") {
    arrowStyles =
      "border-none border-b-kakao-blue -top-1/2 -mt-0.5 right-1/2 transform translate-x-1/2";
  } else if (direction === "bottom") {
    arrowStyles =
      "border-none border-t-kakao-blue top-1/2 mt-1.5 right-1/2 transform translate-x-1/2";
  } else if (direction === "left") {
    arrowStyles =
      "border-none border-r-kakao-blue top-1/2 -mt-1.5 -left-2 mr-3.5";
  } else if (direction === "right") {
    arrowStyles =
      "border-none border-l-kakao-blue top-1/2 -mt-1.5 right-1.5 -mr-3.5";
  }

  return (
    <div className={clsx("w-6 h-4 xl:w-7 xl:h-5 mb-4", className)}>
      <div className="relative bg-kakao-blue text-white rounded-full flex justify-center items-center max-w-[200px] text-[10px] xl:text-xs">
        {children}
        <div
          className={`absolute w-0 h-0 border-[6px] border-solid border-transparent   ${arrowStyles}`}
        />
      </div>
    </div>
  );
};

export default SpeechBubble;
