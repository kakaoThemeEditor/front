interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="bg-gray-100 border-t border-t-gray-200 border-b border-b-gray-900 py-1.5 grid grid-cols-[4fr_5fr_1fr] items-center">
      <div className="px-2 py-1 text-xs font-bold">{title}</div>
      {subtitle && (
        <div className="px-2 py-1 text-xs font-bold">{subtitle}</div>
      )}
    </div>
  );
};
