import { cn } from "shared/lib/utils";

type Props = {
  name: string;
  details: string;
  className?: string;
};

export const CartItemInfo = ({ name, details, className }: Props) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="text-xl font-bold flex-1 leading-7">{name}</h2>
      </div>
      {details.length > 0 && <p className="text-sm text-gray-400 w-[90%] mt-1">{details}</p>}
    </div>
  );
};
