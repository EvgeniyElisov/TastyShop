import { ProductVariant } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";
import { Variant } from "entities/product/GroupVariants";
import { PizzaSize, PizzaType } from "shared/constants/pizza";
import { getAvailablePizzaSizes } from "shared/lib";

export type ReturnProps = {
  size: PizzaSize;
  setSize: (size: PizzaSize) => void;
  type: PizzaType;
  setType: (type: PizzaType) => void;
  selectedIngredientsIds: Set<number>;
  toggleSelectedIngredientsIds: (ingredientId: number) => void;
  availableSizesVariants: Variant[];
  currentVariantId?: number;
};

export const usePizzaOptions = (variants: ProductVariant[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredientsIds, { toggle: toggleSelectedIngredientsIds }] = useSet(new Set<number>([]));
  const availableSizesVariants = getAvailablePizzaSizes(type, variants);

  const currentVariantId = variants.find((variant) => variant.pizzaType === type && variant.size === size)?.id;

  useEffect(() => {
    const isCurrentAvailableSize = availableSizesVariants.find((variant) => Number(variant.value) === size && !variant.disabled);
    const availableSize = availableSizesVariants.find((variant) => !variant.disabled);
    if (!isCurrentAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    setSize,
    type,
    setType,
    selectedIngredientsIds,
    toggleSelectedIngredientsIds,
    availableSizesVariants,
    currentVariantId,
  };
};
