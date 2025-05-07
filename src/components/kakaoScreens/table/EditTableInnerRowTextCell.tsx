import clsx from "clsx";

interface EditTableTextCellProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export function EditTableInnerRowTextCell({ onClick, children }: EditTableTextCellProps) {
  return (
    <div
      className={clsx("px-2 py-1 cursor-pointer h-full flex items-center", onClick && "cursor-pointer")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
