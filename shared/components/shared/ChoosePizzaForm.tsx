"use client";

import { useState } from "react";
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from "shared/constants/pizza";
import { cn } from "shared/lib/utils";
import { ProductWithRelations } from "types/product";
import { GroupVariants, IngredientItem, PizzaImage, Title } from ".";
import { Button } from "../ui";
import { useSet } from "react-use";

type Props = {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: ProductWithRelations["ingredients"];
  variants?: ProductWithRelations["variants"];
  onClickAdd?: VoidFunction;
};

export const ChoosePizzaForm= ({ 
    name, 
    variants, 
    imageUrl, 
    ingredients, 
    onClickAdd, 
    className }: Props) => {

  const textDetaills = "Lorem ipsum dolor sit amet consectetur";

  const totalPrice = 350;

  const [size, setSize] = useState<PizzaSize>(20)
  const [type, setType] = useState<PizzaType>(1)
  const [selectedIngredientsIds, {toggle: toggleSelectedIngredientsIds}] = useSet(new Set<number>([]))

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage src={imageUrl} alt={name} size={size} />

      <div className="w-[490px] bg-form-bg p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

       

       

        <div className={'flex flex-col gap-3 mt-5 mb-8'}>
          <GroupVariants 
            items={pizzaSizes} 
            value={String(size)} 
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

            <GroupVariants 
            items={pizzaTypes} 
            value={String(type)} 
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className={"grid grid-cols-3 gap-3"}>
            {ingredients.map((ingredient) => (
              <IngredientItem 
                key={ingredient.id} 
                name={ingredient.name} 
                price={ingredient.price} 
                imageUrl={ingredient.imageUrl} 
                onClick={() => toggleSelectedIngredientsIds(ingredient.id)}
                active={selectedIngredientsIds.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
       

        <Button 
        // loading={loading} 
        // onClick={handleClickAdd} 
        className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
