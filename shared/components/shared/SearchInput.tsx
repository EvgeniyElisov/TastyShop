"use client";

import { cn } from "shared/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { apiClient } from "shared/services";
import { Product } from "@prisma/client";
import { useDebounce } from "react-use";

type Props = {
  className?: string;
};

export const SearchInput = ({ className }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useDebounce(
    async () => {
      try {
        const products = await apiClient.products.search(searchQuery);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    },
    500,
    [searchQuery]
  );

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const onClickItemHandler = () => {
    setProducts([]);
    setSearchQuery("");
  };

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/40 backdrop-blur-sm z-30" />}
      <div className={cn("flex rounded-2xl flex-1 justify-between relative h-14 z-30", className)}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-inner" />
        <Search className="absolute top-1/2 translate-y-[-50%] left-5 h-5 w-5 text-gray-400 z-10" />
        <input
          className="relative z-10 rounded-2xl outline-none w-full bg-transparent pl-14 pr-5 text-base placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchQuery}
          onChange={searchHandler}
        />
        <div
          className={cn(
            "absolute w-full min-h-10 bg-white rounded-2xl py-2 top-16 shadow-2xl border border-gray-100 transition-all duration-300 invisible opacity-0 z-30 backdrop-blur-md",
            focused && "visible opacity-100 top-14"
          )}
        >
          {searchQuery && products.length === 0 ? (
            <span className="block px-5 py-4 text-gray-500 text-center w-full text-base">Ничего не найдено</span>
          ) : (
            products.map((product) => (
              <Link
                onClick={onClickItemHandler}
                key={product.id}
                className={"flex items-center gap-4 px-5 py-3.5 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all rounded-lg mx-2 my-1 group"}
                href={`/product/${product.id}`}
              >
                <div className="relative overflow-hidden rounded-lg ring-2 ring-gray-100 group-hover:ring-primary/30 transition-all">
                  <Image className={"rounded-lg"} src={product.imageUrl} alt={product.name} width={52} height={52} />
                </div>
                <span className="text-base font-medium group-hover:text-primary transition-colors">{product.name}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};
