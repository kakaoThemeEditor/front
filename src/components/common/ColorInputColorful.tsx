import { Input } from "../ui/input";
import { HexColorPicker } from "react-colorful";
import { useState, useCallback } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ColorInputColorfulProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const ColorInputColorful = ({ value, onChange, placeholder = "#FFFFFF", label }: ColorInputColorfulProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
    (color: string) => {
      onChange(color);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col w-18">
      {label && <div className="px-2 py-1">{label}</div>}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded cursor-pointer border-2 border-white"
              style={{ backgroundColor: value }}
            />
            <Input
              type="text"
              placeholder={placeholder}
              className="border-none focus-visible:ring-0 h-3.5 pl-0 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <HexColorPicker color={value} onChange={handleChange} />
        </PopoverContent>
      </Popover>
    </div>
  );
};
