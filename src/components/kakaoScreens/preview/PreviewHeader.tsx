export function PreviewHeader({ title, children }: { title?: string; children?: React.ReactNode | React.ReactNode[] }) {
  return (
    <div className="w-full flex items-center justify-between mt-2 px-3 pt-1">
      <div className="text-xs xl:text-sm font-bold">{title}</div>
      <div className="flex">{children}</div>
    </div>
  );
}
