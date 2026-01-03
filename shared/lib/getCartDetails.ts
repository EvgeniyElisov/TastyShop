export const getCartDetails = (cart: any) => {
  return {
    totalAmount: cart.totalAmount,
    items: cart.items,
  };
};