import React from 'react';
import Input from '../input/input';
import Button from '../button/button';
import {parseStringToLocaleString} from '../../utils';
import {RUB_SYMBOL, ButtonType} from '../../const';

const Order = ({total}) => {

  return (
    <form action="#" className="cart__order order">
      <div className="order__promo">
        <p className="order__promo-title">Промокод на скидку</p>
        <p className="order__promo-subtitle">Введите свой промокод, если он у вас есть.</p>
        <div className="order__promo-wrapper">
          <Input className={`order__promo-input`} name={`promo`} label={`Введите промокод`} value={``} />
          <Button title={ButtonType.PROMO.title} className={`order__button order__button--promo`} type={ButtonType.PROMO.type} />
        </div>
      </div>
      <div className="order__checkout">
        <p className="order__checkout-total">{`Всего: ${parseStringToLocaleString(total)} ${RUB_SYMBOL}`}</p>
        <Button title={ButtonType.CHECKOUT.title} className={`order__button order__button--checkout`} type={ButtonType.CHECKOUT.type} />
      </div>
    </form>
  );
};

export default Order;
