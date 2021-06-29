import React from 'react';
import PropTypes from 'prop-types';
import {parseStringToLocaleString, capitalizeFirstLetter} from '../../utils';
import {RUB_SYMBOL} from '../../const';

const PurchaseProduct = ({guitar, isPopUp}) => {

  return (
    <>
      <div className="purchase__image">
        <picture>
          <source type="image/webp" srcSet={`guitars/${guitar.image}.webp 1x, guitars/${guitar.image}@2x.webp 2x`} />
          <img className="purchase__picture" src={`guitars/${guitar.image}.png`}
          srcSet={`guitars/${guitar.image}@2x.png 2x`} width="48" height="124" alt={`Фотография гитары ${guitar.title}`}/>
        </picture>
      </div>
      <div className="purchase__info">
        <h3 className="purchase__title">{isPopUp ? `Гитара` : guitar.type} {guitar.title}</h3>
        <p className="purchase__text">{`Артикул: ${guitar.code}`}</p>
        <p className="purchase__text">{`${capitalizeFirstLetter(guitar.type)}, ${guitar.strings} струнная`}</p>
        {isPopUp && <p className="purchase__sum">{`Цена: ${parseStringToLocaleString(guitar.price)} ${RUB_SYMBOL}`}</p>}
      </div>
    </>
  );
};

PurchaseProduct.propTypes = {
  guitar: PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  isPopUp: PropTypes.bool,
};

export default PurchaseProduct;
