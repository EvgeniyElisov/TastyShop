import { cn } from "shared/lib/utils";
import { CartItemDetailsImage, CartItemDetailsPrice, CartItemInfo } from "./cart-item-details";
import { CountButton } from ".";
import { Trash2Icon } from "lucide-react";
import { CartItemProps } from "./cart-item-details/types";

type Props = CartItemProps & {
  className?: string;
}

export const CartDrawerItem = ({ className, id, imageUrl, name, price, quantity, details }: Props) => {

  // const { updateItemQuantity, removeCartItem } = useCart();

  // const onClickCountButton = (type: 'plus' | 'minus') => {
  //   updateItemQuantity(id, type === 'plus' ? quantity + 1 : quantity - 1);
  // };

  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details}/>

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={() => {}} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon 
              onClick={() => {}} 
              className="text-gray-400 cursor-pointer hover:text-gray-600" 
              size={16} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
