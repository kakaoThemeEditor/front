import { cn } from "@/lib/utils";

interface SmallTextProps {
  children: React.ReactNode;
  className?: string;
}

export const SmallText = ({ children, className }: SmallTextProps) => {
  return <span className={cn("text-[8px] xl:text-[9px]", className)}>{children}</span>;
};
