"use client";

import { Input } from "components/ui";
import { FilterCheckbox, FilterCheckboxProps } from "./FilterCheckbox";
import { useState } from "react";

type Item = FilterCheckboxProps;

type Props = {
  title: string;
  className?: string;
  items: Item[];
  defaultItems: Item[];
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
  limit = 6,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const list = showAll 
  ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) 
  : defaultItems.slice(0, limit);

  const onChangeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input onChange={onChangeSearchHandler} value={searchValue} placeholder={searchInputPlaceholder} className={"bg-gray-50 border-none"} />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
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

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
