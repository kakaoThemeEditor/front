interface CircleButtonProps {
  Number: number;
  className?: string;
}

import clsx from "clsx";

export default function CircleButton({ Number, className = "" }: CircleButtonProps) {
  return (
    <div
      className={clsx(
        "w-4 h-4 bg-kakao-blue rounded-full flex justify-center items-center text-white text-sm font-bold border",
        "text-[9px] xl:text-[11px]",
        className
      )}
    >
      {Number}
    </div>
  );
}
