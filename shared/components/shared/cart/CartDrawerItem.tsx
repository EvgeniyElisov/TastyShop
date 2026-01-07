import { Trash2Icon } from "lucide-react";
import { useCart } from "shared/hooks";
import { cn } from "shared/lib/utils";
import { CountButton } from ".";
import { CartItemDetailsImage, CartItemDetailsPrice, CartItemInfo } from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/types";

type Props = CartItemProps & {
  onClickCountButton: (type: "plus" | "minus") => void;
  onClickRemoveCartItem: () => void;
  className?: string;
};

export const CartDrawerItem = ({
  className,
  imageUrl, 
  name, 
  price, 
  quantity, 
  details, 
  disabled, 
  onClickCountButton, 
  onClickRemoveCartItem 
}: Props) => {

  return (
    <div className={cn("flex bg-white p-5 gap-6", { "opacity-50 pointer-events-none": disabled }, className)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon onClick={onClickRemoveCartItem} className="text-gray-400 cursor-pointer hover:text-gray-600" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
