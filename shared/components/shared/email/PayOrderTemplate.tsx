type Props = {
  oderId: number;
  totalAmount: number;
  paymentUrl: string;
};

export function PayOrderTemplate({ oderId, totalAmount, paymentUrl }: Props) {
  return (
    <div>
      <h1>Ваш заказ №{oderId} успешно оформлен!</h1>
      <p>Сумма заказа: {totalAmount} руб.</p>
      <p>Ссылка на оплату: <a href={paymentUrl}>{paymentUrl}</a></p>
    </div>
  );
}
