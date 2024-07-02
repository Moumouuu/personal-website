import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "value" | "onChange"
  > {
  className?: ClassValue;
  value: string;
  setValue: Dispatch<SetStateAction<number>>;
  placeholder: string;
}

export default function Input({
  className,
  value,
  setValue,
  placeholder,
  ...props
}: Props) {
  return (
    <input
      className={cn(
        "rounded-base bg-white dark:bg-darkBg border-2 border-border dark:border-darkBorder p-[10px] font-base ring-offset-white dark:ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 outline-none",
        className
      )}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value as unknown as number);
      }}
      aria-label={placeholder}
      {...props}
    />
  );
}
