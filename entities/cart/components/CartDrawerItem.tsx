import { Trash2Icon } from "lucide-react";
import { useCart } from "shared/hooks";
import { cn } from "shared/lib/utils";
import { CountButton } from "entities/cart/components/CountButton";
import { CartItemDetailsImage, CartItemDetailsPrice, CartItemInfo } from "entities/cart/components/cart-item-details";
import { CartItemProps } from "entities/cart/components/cart-item-details/types";

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
    <div className={cn("flex bg-white p-6 gap-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200", { "opacity-50 pointer-events-none": disabled }, className)}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity" />
        <CartItemDetailsImage src={imageUrl} />
      </div>

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-5 border-gray-200" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-5">
            <CartItemDetailsPrice value={price} />
            <button 
              onClick={onClickRemoveCartItem}
              className="p-2 rounded-lg hover:bg-red-50 transition-colors group"
            >
              <Trash2Icon className="text-gray-400 group-hover:text-red-500 transition-colors" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
