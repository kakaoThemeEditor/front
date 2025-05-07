import React from "react";
import { Input } from "../ui/input";

interface InsetInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const InsetInput: React.FC<InsetInputProps> = ({ value, onChange }) => {
  // Parse the current value into image and inset values
  const parseValue = (val: string) => {
    const parts = val.split(" ");
    const x = parts[0] || "0px";
    const y = parts[1] || "0px";
    return { x, y };
  };

  const { x, y } = parseValue(value);

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newX = e.target.value;
    onChange(`${newX}px ${y}`);
  };

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newY = e.target.value;
    onChange(`${x} ${newY}px`);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="number"
        value={parseInt(x)}
        onChange={handleXChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="X"
      />
      <Input
        type="number"
        value={parseInt(y)}
        onChange={handleYChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="Y"
      />
    </div>
  );
};
