import Link from "next/link";
import { Title } from ".";
import Image from "next/image";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
  ingredients: Ingredient[];
};

export const ProductCard = ({ id, name, price, imageUrl, className, ingredients }: Props) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 h-[320px] shadow-lg shadow-primary/5 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-center items-center h-full p-8">
            <Image 
              className="w-[260px] h-[260px] object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2" 
              src={imageUrl} 
              alt="Product" 
              width={260} 
              height={260} 
            />
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Plus className="text-primary" size={20} />
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <Title text={name} size="sm" className="font-bold group-hover:text-primary transition-colors" />
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 min-h-[40px]">
            {ingredients.map((ingredient) => ingredient.name).join(", ")}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <span className="text-xs text-gray-400 font-medium">от</span>
            <span className="text-2xl font-bold ml-1.5 text-primary">{price} руб.</span>
          </div>

          <Button 
            variant="secondary" 
            className="text-base font-bold px-7 h-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Plus size={20} className="mr-2" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
