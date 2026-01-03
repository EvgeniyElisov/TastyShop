"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "shared/components/ui";
import { cn } from "shared/lib/utils";
import { CartDrawerItem, Title } from "..";
import { getCartItemDetails } from "shared/lib";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [redirecting, setRedirecting] = useState(false);

  //   const { totalAmount, items, loading } = useCart(true);

  const totalAmount = 200;

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
          <div className={"mb-2"}>
            <CartDrawerItem
              id={1}
              imageUrl={"https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"}
              name={"Пицца 1"}
              price={100}
              quantity={1}
              details={getCartItemDetails(1, 20, [{ name: "Сырный бортик" }, { name: "Сыры чеддер и пармезан" }])}
            />
          </div>
          <div className={"mb-2"}>
            <CartDrawerItem
              id={1}
              imageUrl={"https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp"}
              name={"Пицца 1"}
              price={100}
              quantity={1}
              details={getCartItemDetails(1, 20, [{ name: "Сырный бортик" }, { name: "Сыры чеддер и пармезан" }])}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button
                // onClick={() => setRedirecting(true)}
                // loading={loading || redirecting}
                type="submit"
                className="w-full h-12 text-base"
              >
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
