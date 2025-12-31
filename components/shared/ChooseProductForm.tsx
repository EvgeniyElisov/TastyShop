'use client';

import { cn } from 'lib/utils';
import React from 'react';
import { Title } from '.';
import { Button } from 'components/ui';
import Image from 'next/image';
import { ProductWithRelations } from 'types/product';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  onClickAdd?: VoidFunction;
  ingredients: ProductWithRelations["ingredients"];
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  ingredients,
  className,
}) => {
  // const { addCartItem, loading } = useCart();

  // const productItem = items?.[0];

  // if (!productItem) {
  //   throw new Error('Продукт не найден');
  // }

  // const productPrice = productItem.price;

  // const handleClickAdd = async () => {
  //   try {
  //     await addCartItem({
  //       productItemId: productItem.id,
  //       quantity: 1,
  //     });
  //     toast.success('Товар добавлен в корзину');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Произошла ошибка при добавлении в корзину');
  //   }

  //   onClickAdd?.();
  // };

  const productPrice = 350;

  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300"
          width={350}
          height={350}
        />
      </div>

      <div className="w-[490px] bg-[#f9f4f0] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button
          // loading={loading}
          // onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {productPrice} ₽
        </Button>
      </div>
    </div>
  );
};
