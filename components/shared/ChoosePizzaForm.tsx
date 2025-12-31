"use client";

import { cn } from "lib/utils";
import { ProductWithRelations } from "types/product";
import { PizzaImage, Title } from ".";
import { Button } from "components/ui";

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
  //   const {
  //     size,
  //     type,
  //     availablePizzaSizes,
  //     setPizzaSize,
  //     setPizzaType,
  //     textDetaills,
  //     loading,
  //     addPizza,
  //     selectedIngredientsIds,
  //     toggleAddIngredient,
  //   } = useChoosePizza(items);

  //   const totalIngredientPrice: number =
  //     ingredients
  //       ?.filter((ingredient) => selectedIngredientsIds.has(ingredient.id))
  //       ?.reduce((acc, item) => acc + item.price, 0) || 0;

  //   const pizzaPrice: number = items?.find((item) => item.pizzaType === type)?.price || 0;
  //   const totalPrice: number = totalIngredientPrice + pizzaPrice;

  //   const handleClickAdd = async () => {
  //     try {
  //       await addPizza();
  //       onClickAdd?.();
  //     } catch (error) {
  //       toast.error('Произошла ошибка при добавлении в корзину');
  //       console.error(error);
  //     }
  //   };

  const size = 20;

  const textDetaills = "Lorem ipsum dolor sit amet consectetur";

  const totalPrice = 350;

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage src={imageUrl} alt={name} size={size} />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        {/* <PizzaSelector
          pizzaSizes={availablePizzaSizes}
          selectedSize={String(size)}
          selectedPizzaType={String(type)}
          onClickSize={setPizzaSize}
          onClickPizzaType={setPizzaType}
        />

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <IngredientsList ingredients={ingredients} onClickAdd={toggleAddIngredient} selectedIds={selectedIngredientsIds} />
        </div> */}

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
