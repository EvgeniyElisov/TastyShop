import { cn } from "shared/lib/utils";
import { CountIconButton, IconButtonProps } from "entities/cart/components/CountIconButton";

export type CountButtonProps = {
  value?: number;
  size?: IconButtonProps["size"];
  className?: string;
  onClick?: (type: "plus" | "minus") => void;
};

export const CountButton = ({ className, onClick, value = 1, size = "sm" }: CountButtonProps) => {
  return (
    <div className={cn("inline-flex items-center justify-between gap-4", className)}>
      <CountIconButton onClick={() => onClick?.("minus")} disabled={value === 1} size={size} type="minus" />

      <b className={size === "sm" ? "text-base" : "text-lg"}>{value}</b>

      <CountIconButton onClick={() => onClick?.("plus")} size={size} type="plus" />
    </div>
  );
};
