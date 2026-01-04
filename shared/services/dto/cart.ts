import { Cart, CartItem, Ingredient, Product, ProductVariant } from "@prisma/client";
import { PizzaSize, PizzaType } from "shared/constants/pizza";

export type CartItemDTO = CartItem & {
  productVariant: ProductVariant & { product: Product };
  ingredients: Ingredient[];
};

export type CartDTO = Cart & {
  items: CartItemDTO[];
};

export type CreateCartItemValues = {
  productVariantId: number;
  ingredients?: number[];
}
