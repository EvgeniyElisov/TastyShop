import { cn } from "shared/lib/utils";

type Props = {
  className?: string;
};

export const ItemSkeleton = ({ className }: Props) => {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
      <div className="flex items-center gap-6">
        <div className="w-[70px] h-[70px] bg-gray-200 rounded-lg animate-pulse" />
        <h2 className="w-48 h-6 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
      <div className="h-10 w-[150px] bg-gray-200 rounded animate-pulse" />
    </div>
  );
};
