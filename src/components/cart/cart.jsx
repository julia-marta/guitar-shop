import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Purchases from '../purchases/purchases';
import Order from '../order/order';
import {getTotalSum} from '../../utils';

const Cart = () => {

  const [guitars, setGuitars] = useState([]);
  const [orderSum, setOrderSum] = useState(0);

  const cartData = useSelector((state) => state.cartData);

  useEffect(() => {
    setGuitars(Object.values(cartData));
  }, [cartData]);

  useEffect(() => {
    if (guitars.length === 0) {
      setOrderSum(0)
    } else {
      const total = getTotalSum(guitars);
      setOrderSum(total);
    }
  }, [guitars]);

  return (
    <div className="cart__content">
      <Purchases items={guitars} />
      <Order total={orderSum} />
    </div>
  );
};

export default Cart;
