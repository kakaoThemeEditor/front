import CircleButton from "../../button/CircleButton";
import { ReactNode } from "react";
import clsx from "clsx";

interface EditTableRowProps {
  number: number;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const EditTableRow = ({ number, children, className = "", isActive, onClick }: EditTableRowProps) => {
  return (
    <div
      className={clsx(
        ` flex items-center mb-0 border-b-1 border-black/10 ${className} `,
        isActive ? "bg-blue-50" : "bg-white"
      )}
    >
      <div
        className={clsx("px-1 self-stretch  flex justify-center items-center", onClick && "cursor-pointer")}
        onClick={onClick}
      >
        <CircleButton Number={number} className={`text-xs `} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
