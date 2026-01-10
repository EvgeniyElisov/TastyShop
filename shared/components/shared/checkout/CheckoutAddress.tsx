import { InfoBlock } from ".";
import { FormInput, FormTextarea } from "../form";

type Props = {
  totalAmount: number;
};

export const CheckoutAddress = ({ totalAmount }: Props) => {
  return (
    <InfoBlock 
        title="3. Адрес доставки" 
        className={!totalAmount ? "opacity-50 pointer-events-none" : ""} 
        contentClassName="p-8"
    >
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Адрес доставки" />
        <FormTextarea name="comment" className="text-base" placeholder="Комментарий к заказу" />
      </div>
    </InfoBlock>
  );
};
