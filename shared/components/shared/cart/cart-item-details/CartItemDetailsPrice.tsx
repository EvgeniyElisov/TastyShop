import { cn } from "shared/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice = ({ value, className }: Props) => {
  return <h2 className={cn("font-bold text-lg", className)}>{`${value} руб.`}</h2>;
};
