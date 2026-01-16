import Image from "next/image";
import { cn } from "shared/lib/utils";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage = ({ src, className }: Props) => {
  return (
    <Image 
      className={cn("w-[70px] h-[70px] rounded-lg", className)} 
      src={src} 
      width={70} 
      height={70} 
      alt="Cart Item Image" 
    />
  );
};
