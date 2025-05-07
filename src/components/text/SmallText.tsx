import { cn } from "@/lib/utils";

interface SmallTextProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  alpha?: number;
  size?: "sm" | "md";
}

export const SmallText = ({ children, className, color, alpha, size = "sm" }: SmallTextProps) => {
  let textSize;
  if (size === "sm") {
    textSize = "text-[8px] xl:text-[9px]";
  } else if (size === "md") {
    textSize = "text-[9px] xl:text-[10px]";
  }

  return (
    <span className={cn(textSize, className)} style={{ color, opacity: alpha }}>
      {children}
    </span>
  );
};
