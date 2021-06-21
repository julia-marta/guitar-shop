import React from 'react';
import Input from '../input/input';
import Button from '../button/button';


const Order = () => {

  return (
    <form action="#" className="cart__order order">
      <div className="order__promo">
        <p className="order__promo-title">Промокод на скидку</p>
        <p className="order__promo-subtitle">Введите свой промокод, если он у вас есть.</p>
        <div className="order__promo-wrapper">
          <Input className={`order__promo-input`} name={`promo`} label={`Введите промокод`} value={``} />
          <Button title={`Применить купон`} className={`order__button order__button--promo`} type={`mono`} />
        </div>
      </div>
      <div className="order__checkout">
        <p className="order__checkout-total">{`Всего: ${`47 000`} ${String.fromCharCode(0x20BD)}`}</p>
        <Button title={`Оформить заказ`} className={`order__button order__button--checkout`} type={`color`} />
      </div>
    </form>
  );
};

export default Order;
