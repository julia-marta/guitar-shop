import React from 'react';
import Purchases from '../purchases/purchases';
import Order from '../order/order';

const Cart = () => {

  return (
    <div className="cart__content">
      <Purchases />
      <Order />
    </div>
  );
};

export default Cart;
