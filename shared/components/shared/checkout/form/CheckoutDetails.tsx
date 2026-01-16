import { LucideIcon } from "lucide-react";
import { cn } from "shared/lib/utils";

type Props = {
  icon: LucideIcon;
  text: string;
  value: React.ReactNode;
  className?: string;
};

export const CheckoutDetails = ({ icon: Icon, text, value, className }: Props) => {
  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-1 text-base text-neutral-500">
        <div className="flex items-center">
          <Icon size={20} className={"mr-3 text-gray-400"} />
          <span>{text}</span>
        </div>
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-3" />
      </div>
      <span className="font-bold text-base">{value}</span>
    </div>
  );
};
