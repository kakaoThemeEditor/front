interface CircleButtonProps {
  Number: number;
  className?: string;
}

import clsx from "clsx";

export default function CircleButton({ Number, className = "" }: CircleButtonProps) {
  return (
    <div
      className={clsx(
        "w-full h-full bg-kakao-blue rounded-full flex justify-center items-center text-white text-sm font-bold border",
        className
      )}
    >
      {Number}
    </div>
  );
}
