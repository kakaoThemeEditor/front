import React from "react";

interface KakaoPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  frameColor?: string;
  frameImage?: string;
}

export const KakaoPhoneFrame = ({ children, className, frameColor, frameImage }: KakaoPhoneFrameProps) => {
  return (
    <div
      className={`w-64 xl:w-72 aspect-[9/18.7] bg-white rounded-2xl p-[2px] ${className}`}
      style={{
        boxShadow: `
          4px 4px 12px rgba(0,0,0,0.15), 
          -4px -4px 8px rgba(0,0,0,0.1)
        `,
      }}
    >
      <div
        className="relative flex flex-col  size-full rounded-2xl border-2 border-white bg-red-100"
        style={{
          backgroundColor: frameColor,
          backgroundImage: `url(${frameImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
