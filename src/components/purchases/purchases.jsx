import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setOrderSum} from '../../store/slice';
import PurchaseCard from '../purchase-card/purchase-card';
import {getTotalSum} from '../../utils';

const Purchases = () => {

  const cartData = useSelector((state) => state.cartData);
  const guitarData = useSelector((state) => state.guitarData);
  const promoCode = useSelector((state) => state.promoCode);

  const dispatch = useDispatch();

  const itemsInCart = Object.values(guitarData).filter((item) => Object.keys(cartData).includes(item.id));
  const purchases = itemsInCart.map((item) => {return {...item, count: cartData[item.id].count}})
  const isEmpty = purchases.length === 0;

  useEffect(() => {
    if (isEmpty) {
      dispatch(setOrderSum(0))
    } else {
      const total = getTotalSum(purchases, promoCode);
      dispatch(setOrderSum(total))
      setOrderSum(total);
    }
  }, [dispatch, isEmpty, promoCode, purchases]);

  return (
    <ul className="cart__list">
      {isEmpty && <PurchaseCard isEmptyCard={true} />}
      {!isEmpty && purchases.map((item) => (
        <PurchaseCard key={item.id} guitar={item} />
      ))}
    </ul>
  );
};

export default Purchases;
