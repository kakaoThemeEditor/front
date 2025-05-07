import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  textColor?: string;
}

export const IconButton = ({
  icon: Icon,
  text,
  className,
  onClick,
  size = "sm",
  textColor = "#000000",
  children,
}: IconButtonProps) => {
  const textSizeClasses = {
    sm: "text-[8px] xl:text-[9px]",
    md: "text-[9px] xl:text-[10px]",
    lg: "text-[10px] xl:text-[11px]",
  };
  const iconSizeClasses = {
    sm: "w-2 h-2 xl:w-3 xl:h-3",
    md: "w-3 h-3 xl:w-4 xl:h-4",
    lg: "w-4 h-4 xl:w-5 xl:h-5",
  };

  return (
    <div
      className={cn(
        "relative flex items-center rounded-2xl bg-transparent border-1 border-black  px-2 py-1",
        className
      )}
      onClick={onClick}
    >
      <span className={textSizeClasses[size]} style={{ color: textColor }}>
        {text}
      </span>
      <Icon className={iconSizeClasses[size]} style={{ color: textColor }} />
      {children}
    </div>
  );
};
