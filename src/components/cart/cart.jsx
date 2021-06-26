import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setOrderSum} from '../../store/slice';
import Purchases from '../purchases/purchases';
import Order from '../order/order';
import {getTotalSum} from '../../utils';

const Cart = () => {

  const cartData = useSelector((state) => state.cartData);
  const promoCode = useSelector((state) => state.promoCode);

  const dispatch = useDispatch();

  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    setGuitars(Object.values(cartData));
  }, [cartData]);

  useEffect(() => {
    if (guitars.length === 0) {
      dispatch(setOrderSum(0))
    } else {
      const total = getTotalSum(guitars, promoCode);
      dispatch(setOrderSum(total))
      setOrderSum(total);
    }
  }, [dispatch, guitars, promoCode]);

  return (
    <div className="cart__content">
      <Purchases items={guitars} />
      <Order />
    </div>
  );
};

export default Cart;
