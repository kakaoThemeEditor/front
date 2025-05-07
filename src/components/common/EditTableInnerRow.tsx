import clsx from "clsx";

interface EditTableInnerRowProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function EditTableInnerRow({ children, isActive, onClick }: EditTableInnerRowProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-[4fr_5fr_1fr] items-center rounded-md ",
        isActive ? "bg-blue-50" : "bg-white",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
