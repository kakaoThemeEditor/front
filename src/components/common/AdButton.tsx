import { cn } from "@/lib/utils";

interface AdButtonProps {
  children?: React.ReactNode;
  children1?: React.ReactNode;
  className?: string;
  borderColor?: string;
  onClick?: () => void;
}

export const AdButton = ({ children, children1, className, onClick, borderColor }: AdButtonProps) => {
  return (
    <>
      <div className="border-b-[1px] my-2 transform scale-y-[0.1] origin-bottom" style={{ borderColor }}></div>
      <div className="relative px-3.5 xl:px-4 py-1 xl:py-2 ">
        {children1}
        <div
          className={cn(
            "w-full h-10 xl:h-12 text-xs xl:text-sm bg-gray-200 rounded-xl  flex items-center p-3 xl:p-4",
            className
          )}
          onClick={onClick}
        >
          {children}
        </div>
      </div>
      <div className=" border-b-[1px] my-2 transform scale-y-[0.1] origin-bottom" style={{ borderColor }}></div>
    </>
  );
};
