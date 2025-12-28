"use client";

import { Input } from "components/ui";
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { useFilterIngredients } from "hooks";
import { useState } from "react";
import { useSet } from "react-use";

type Props = {
  className?: string;
};

type PriceFIlterType = {
  priceFrom: number;
  priceTo: number;
};

export const Filters = ({ className }: Props) => {
  const { ingredients, loading, toggleId, selectedIds } = useFilterIngredients();
  const minPrice = 0;
  const maxPrice = 1000;

  const [price, setPrice] = useState<PriceFIlterType>({
    priceFrom: minPrice,
    priceTo: maxPrice,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: ingredient.id.toString(),
  }));

  const handlePriceChange = (name: keyof PriceFIlterType, value: number) => {
    setPrice({ ...price, [name]: value });
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="PizzaTypes"
        className={"mt-5"}
        selectedValues={pizzaTypes}
        onClickCheckbox={togglePizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="Sizes"
        className={"mt-5"}
        selectedValues={sizes}
        onClickCheckbox={toggleSizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className={"mt-5 border-y border-y-neutral-100 py-6 pb-7"}>
        <p className={"font-bold mb-3"}>Цена от и до:</p>
        <div className={"flex gap-3 mb-5"}>
          <Input
            type="number"
            placeholder={price.priceFrom.toString()}
            min={minPrice}
            max={maxPrice}
            value={price.priceFrom}
            onChange={(e) => handlePriceChange("priceFrom", Number(e.currentTarget.value))}
          />
          <Input
            type="number"
            placeholder={price.priceTo.toString()}
            min={100}
            max={maxPrice}
            value={price.priceTo}
            onChange={(e) => handlePriceChange("priceTo", Number(e.currentTarget.value))}
          />
        </div>

        <RangeSlider
          min={minPrice}
          max={maxPrice}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="Ingredients"
        className={"mt-5"}
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={toggleId}
        loading={loading}
        selectedValues={selectedIds}
      />
    </div>
  );
};
