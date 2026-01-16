'use client';

import Image from 'next/image';
import { cn } from 'shared/lib/utils';
import { Title } from '.';
import { Button } from '../ui';

type Props = {
  imageUrl: string;
  name: string;
  price: number;
  className?: string;
  addProductToCart: () => void;
  loading: boolean;
}

export const ChooseProductForm = ({
  name,
  imageUrl,
  price,
  addProductToCart,
  className,
  loading,
}: Props) => {
 
  const addProductToCartHandler = () => {
    addProductToCart();
  }

  return (
    <div className={cn(className, 'flex flex-1 gap-16')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10 blur-3xl" />
        <Image
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 drop-shadow-2xl"
          width={480}
          height={480}
        />
      </div>

      <div className="w-[560px] bg-gradient-to-br from-form-bg to-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        <Title text={name} size="md" className="font-extrabold mb-6" />

        <Button
          loading={loading}
          onClick={addProductToCartHandler}
          className="h-[64px] px-10 text-lg font-bold rounded-2xl w-full mt-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
          Добавить в корзину за {price} руб.
        </Button>
      </div>
    </div>
  );
};
