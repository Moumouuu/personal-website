"use client";

import { Check } from "lucide-react";
import { useState } from "react";

interface CheckboxProps {
  item: string;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({ item, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="my-2 flex items-center font-base"
      role="checkbox"
      aria-checked={isChecked}
    >
      <div className="mr-2.5 grid h-5 w-5 place-items-center bg-white outline outline-2 outline-darkBorder">
        {isChecked && <Check className="h-4 w-4" />}
      </div>
      <p className="text-black">{item}</p>
    </button>
  );
}
