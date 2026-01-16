import { cn } from "shared/lib/utils";
import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Container = ({ className, children }: PropsWithChildren<Props>) => {
  return <div className={cn("ml-auto mr-auto max-w-[1400px] px-6", className)}>{children}</div>;
};
