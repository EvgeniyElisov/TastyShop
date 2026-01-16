"use client";

import { Category } from "@prisma/client";
import { cn } from "shared/lib/utils";
import Link from "next/link";
import { useCategoryStore } from "shared/store/category";

type Props = {
  className?: string;
  items: Category[];
};


export const Categories = ({ className, items }: Props) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn("inline-flex gap-2 bg-gradient-to-r from-gray-50 to-gray-100/50 p-2 rounded-3xl shadow-inner", className)}>
      {items.map(({ id, name }) => (
        <Link
          className={cn(
            "flex items-center font-bold h-12 rounded-3xl px-7 text-base transition-all duration-200 relative overflow-hidden",
            activeCategoryId === id 
              ? "bg-white shadow-lg shadow-primary/20 text-primary scale-105" 
              : "text-gray-600 hover:text-primary hover:bg-white/50"
          )}
          key={id}
          href={`#${name}`}
        >
          {activeCategoryId === id && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
          )}
          <span className="relative z-10">{name}</span>
        </Link>
      ))}
    </div>
  );
};
