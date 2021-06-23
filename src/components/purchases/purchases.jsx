import React from 'react';
import PurchaseCard from '../purchase-card/purchase-card';

const Purchases = ({items}) => {

  const isEmpty = Object.values(items).length === 0;

  return (
    <ul className="cart__list">
      {isEmpty && <PurchaseCard isEmptyCard={true} />}
      {!isEmpty && items.map((item, i) => (
        <PurchaseCard key ={i + 1} guitar={item} />
      ))}
    </ul>
  );
};

export default Purchases;
