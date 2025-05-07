import React from "react";
import { Input } from "../ui/input";

interface InsetInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const InsetInputFour: React.FC<InsetInputProps> = ({ value, onChange }) => {
  // Parse the current value into image and inset values
  const parseValue = (val: string) => {
    const parts = val.split(" ");
    const top = parts[0] || "0px";
    const bottom = parts[1] || "0px";
    const left = parts[2] || "0px";
    const right = parts[3] || "0px";
    return { top, bottom, left, right };
  };

  const { top, bottom, left, right } = parseValue(value);

  const handleTopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTop = e.target.value;
    onChange(`${newTop}px ${bottom} ${left} ${right}`);
  };

  const handleBottomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBottom = e.target.value;
    onChange(`${top} ${newBottom}px ${left} ${right}`);
  };

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLeft = e.target.value;
    onChange(`${top} ${bottom} ${newLeft}px ${right}`);
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRight = e.target.value;
    onChange(`${top} ${bottom} ${left} ${newRight}px`);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="number"
        value={parseInt(top)}
        onChange={handleTopChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="X"
      />
      <Input
        type="number"
        value={parseInt(bottom)}
        onChange={handleBottomChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="Y"
      />
      <Input
        type="number"
        value={parseInt(left)}
        onChange={handleLeftChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="Y"
      />
      <Input
        type="number"
        value={parseInt(right)}
        onChange={handleRightChange}
        className="border-none focus-visible:ring-0 h-3.5 pl-1 pr-0 ml-0 placeholder:text-xs text-xs md:text-xs"
        placeholder="Y"
      />
    </div>
  );
};
