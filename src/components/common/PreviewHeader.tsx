interface PreviewHeaderProps {
  title?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const PreviewHeader = ({ title = "카카오톡", leftContent, rightContent }: PreviewHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
      <div className="flex items-center gap-2">
        {leftContent}
        <span className="font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2">{rightContent}</div>
    </div>
  );
};
