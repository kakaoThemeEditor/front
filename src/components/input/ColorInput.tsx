import { useEffect, useMemo, useState } from "react";
import { Input } from "../ui/input";
import debounce from "lodash/debounce";

interface ColorInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const ColorInput = ({ value, onChange, placeholder = "#FFFFFF", label }: ColorInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  // value prop이 바뀌면 내부 상태도 업데이트
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // debounce된 onChange
  const debouncedOnChange = useMemo(
    () =>
      debounce((val: string) => {
        onChange(val);
      }, 30),
    [onChange]
  );

  const handleChange = (val: string) => {
    setLocalValue(val);
    debouncedOnChange(val);
  };

  return (
    <div className="p-1 flex flex-col w-14 justify-center items-center hover:bg-gray-100">
      {label && <div className="px-2 py-1">{label}</div>}
      <input
        type="color"
        className="w-10 h-10 p-0 appearance-none border-2 border-white cursor-pointer"
        value={localValue}
        onInput={(e) => handleChange((e.target as HTMLInputElement).value)}
        // onChange={(e) => handleChange(e.target.value)}
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="border-none focus-visible:ring-0 h-3.5 pl-0 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        value={localValue}
        onChange={(e) => handleChange(e.target.value.toUpperCase())}
      />
    </div>
  );
};
