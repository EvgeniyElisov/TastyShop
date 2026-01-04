"use client";

import { cn } from "shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "types/product";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { Dialog, DialogContent } from "shared/components/ui";
import { useCartStore } from "shared/store";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const firstVariant = product.variants[0];
  const isPizzaForm = Boolean(firstVariant.pizzaType);
  const addCartItem = useCartStore(state => state.addCartItem);

  const addProductToCart = () => {
    addCartItem({
      productVariantId: firstVariant.id,
    });
  }
  const addPizzaToCart = (productVariantId: number, ingredients: number[]) => {
    addCartItem({
      productVariantId,
      ingredients,
    });
  }

  const closeModalHandler = () => {
    router.back();
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={closeModalHandler}>
      <DialogContent className={cn("p-0 min-h-[500px] bg-white overflow-hidden w-[1060px]! max-w-[1060px]! sm:max-w-[1060px]!", className)}>
        {isPizzaForm 
        ? <ChoosePizzaForm 
            imageUrl={product.imageUrl} 
            name={product.name} 
            ingredients={product.ingredients} 
            variants={product.variants} 
            addPizzaToCart={addPizzaToCart}
          />
        : <ChooseProductForm 
            imageUrl={product.imageUrl} 
            name={product.name} 
            price={firstVariant.price}
            addProductToCart={addProductToCart}
          />}
      </DialogContent>
    </Dialog>
  );
};
