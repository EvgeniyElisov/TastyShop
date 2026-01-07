import { addCartItem } from './../services/cart';
import { useEffect } from "react";
import { CreateCartItemValues } from 'shared/services/dto/cart';
import { useCartStore } from "shared/store";
import { CartStateItem } from "shared/store/cart";

type ReturnProps = {
  items: CartStateItem[];
  totalAmount: number;
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return { items, totalAmount, loading, updateItemQuantity, removeCartItem, addCartItem };
};
