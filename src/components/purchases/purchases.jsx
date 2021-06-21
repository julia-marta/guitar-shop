import React from 'react';
import PurchaseCard from '../purchase-card/purchase-card';

const Purchases = ({items}) => {

  const isEmpty = !items;

  return (
    <ul className="cart__list">
      {isEmpty && <PurchaseCard isEmptyCard={true} />}
      {/* {!isEmpty && items.map((item, i) => (
        <GuitarCard key ={i + 1} guitar={item} />
      ))} */}
    </ul>
  );
};

export default Purchases;
