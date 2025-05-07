interface CircleButtonProps {
  Number: number;
  className?: string;
  onClick?: () => void;
}

import clsx from "clsx";

export default function CircleButton({
  Number,
  className = "",
  onClick,
}: CircleButtonProps) {
  return (
    <div
      className={clsx(
        "w-4 h-4 xl:w-5 xl:h-5 bg-kakao-blue rounded-full flex justify-center items-center text-white text-sm font-bold border",
        "text-[9px] xl:text-[11px] ",
        className
      )}
      onClick={onClick}
    >
      {Number}
    </div>
  );
}
