import { Input } from "../ui/input";

interface AlphaInputProps {
  value: string | number;
  onChange: (value: string) => void;
}

export function AlphaInput({ value, onChange }: AlphaInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // 숫자만 입력 가능
    if (/^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <Input
      type="text"
      placeholder="0.00"
      className="border-none focus-visible:ring-0 h-3.5 pl-0 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
      value={value}
      onChange={handleChange}
    />
  );
}
