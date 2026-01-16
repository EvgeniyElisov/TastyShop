"use client";

import { cn } from "shared/lib/utils";

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  items: Variant[];
  onClick?: (value: Variant["value"]) => void;
  className?: string;
  value?: Variant["value"];
};

export const GroupVariants = ({ className, items, value, onClick }: Props) => {
  
  const onClickHandler = (value: Variant["value"]) => {
    onClick?.(value);
  };

  return (
    <div className={cn(className, "flex justify-between bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-1.5 select-none shadow-inner border border-gray-200/50")}>
      {items.map((item) => (
        <button
          type="button"
          key={item.name}
          onClick={() => onClickHandler(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-10 px-6 flex-1 rounded-3xl transition-all duration-300 text-sm font-semibold relative overflow-hidden", 
            {
              "bg-white shadow-lg shadow-primary/10 text-primary scale-105": item.value === value,
              "text-gray-600 hover:text-primary hover:bg-white/60": item.value !== value && !item.disabled,
              "text-gray-400 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.value === value && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
          )}
          <span className="relative z-10">{item.name}</span>
        </button>
      ))}
    </div>
  );
};
