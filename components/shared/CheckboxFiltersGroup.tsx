'use client';

import { Input } from "components/ui";
import { FilterCheckbox, FilterCheckboxProps } from "./FilterCheckbox";

type Item = FilterCheckboxProps;

type Props = {
  title: string;
  className?: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
};

export const CheckboxFiltersGroup = ({
  title,
  className,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
}: Props) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input placeholder={searchInputPlaceholder} className={"bg-gray-50 border-none"} />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
          {items.map((item) => (
            <FilterCheckbox
              onCheckedChange={() => {}}
              checked={false}
              key={String(item.value)}
              value={item.value}
              text={item.text}
              endAdornment={item.endAdornment}
            />
          ))}
        </div>
    </div>
  );
};
