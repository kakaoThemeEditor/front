import { Input } from "../ui/input";

interface ColorInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const ColorInput = ({
  value,
  onChange,
  placeholder = "#FFFFFF",
  label,
}: ColorInputProps) => {
  return (
    <div className="p-1 flex flex-col w-14 justify-center items-center hover:bg-gray-100">
      {label && <div className="px-2 py-1">{label}</div>}
      <input
        type="color"
        className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="border-none focus-visible:ring-0 h-3.5 pl-0 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        value={value.toUpperCase()}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
