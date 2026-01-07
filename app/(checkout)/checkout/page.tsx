"use client";

import { CheckoutSidebar, Container, InfoBlock, Item, Title } from "shared/components/shared";
import { Input, Textarea } from "shared/components/ui";
import { PizzaSize, PizzaType } from "shared/constants/pizza";
import { useCart } from "shared/hooks";
import { getCartItemDetails } from "shared/lib";

export default function CheckoutPage() {
  const { items, totalAmount, updateItemQuantity, removeCartItem } = useCart();

  const totalPrice = 2000;
  const vatPrice = 200;
  const deliveryPrice = 100;
  const submitting = false;

  const onClickCountButtonHandler = (id: number, type: "plus" | "minus", quantity: number) => {
    updateItemQuantity(id, type === "plus" ? quantity + 1 : quantity - 1);
  };

  const onClickRemoveCartItemHandler = (id: number) => {
    removeCartItem(id);
  };
  
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <InfoBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <Item 
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onClickCountButton={(type) => onClickCountButtonHandler(item.id, type, item.quantity)}
                  onClickRemoveCartItem={() => onClickRemoveCartItemHandler(item.id)} 
                  details={getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
                />
              ))}
            </div>
            
          </InfoBlock>
          <InfoBlock 
            title="2. Персональная информация" 
            className={!totalAmount ? "opacity-50 pointer-events-none" : ""} 
            contentClassName="p-8"
          >
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input name="lastName" className="text-base" placeholder="Фамилия" />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </InfoBlock>
          <InfoBlock 
            title="3. Адрес доставки" 
            className={!totalAmount ? "opacity-50 pointer-events-none" : ""} 
            contentClassName="p-8"
          >
            <div className="flex flex-col gap-5">
              <Input name="address" className="text-base" placeholder="Адрес доставки" />
              <Textarea 
                name="comment" 
                className="text-base" 
                placeholder="Комментарий к заказу" 
                rows={5} 
              />
            </div>
          </InfoBlock>
        </div>
        <div className="w-[450px]">
          <CheckoutSidebar 
            totalPrice={totalPrice} 
            totalAmount={totalAmount} 
            vatPrice={vatPrice} 
            deliveryPrice={deliveryPrice} 
            submitting={submitting} 
          />
        </div>
      </div>
    </Container>
  );
}
