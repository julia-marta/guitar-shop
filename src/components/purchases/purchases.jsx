import React from 'react';
import PropTypes from 'prop-types';
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

Purchases.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
};

export default Purchases;
