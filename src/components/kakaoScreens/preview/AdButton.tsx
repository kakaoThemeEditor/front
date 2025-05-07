import { cn } from "@/lib/utils";

interface AdButtonProps {
  children?: React.ReactNode;
  children1?: React.ReactNode;
  className?: string;
  borderColor?: string;
  isBorder?: boolean;
  onClick?: () => void;
}

export const AdButton = ({
  children,
  children1,
  className,
  onClick,
  borderColor,
  isBorder = true,
}: AdButtonProps) => {
  return (
    <>
      {isBorder && (
        <div
          className="border-b-[1px] my-2 transform scale-y-[0.1] origin-bottom"
          style={{ borderColor }}
        ></div>
      )}
      <div className="relative px-3.5 xl:px-4 py-0.5 xl:py-1 ">
        {children1}
        <div
          className={cn(
            "w-full h-10 xl:h-12 text-xs xl:text-sm bg-gray-100 rounded-md  flex items-center p-3 xl:p-4",
            className
          )}
          onClick={onClick}
        >
          {children}
        </div>
      </div>
      {isBorder && (
        <div
          className=" border-b-[1px] my-2 transform scale-y-[0.1] origin-bottom"
          style={{ borderColor }}
        ></div>
      )}
    </>
  );
};
