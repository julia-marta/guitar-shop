import React from 'react';
import {parseStringToLocaleString, capitalizeFirstLetter} from '../../utils';
import {RUB_SYMBOL} from '../../const';

const PurchaseProduct = ({guitar, isPopUp}) => {

  return (
    <>
      <div className="purchase__image">
        <picture>
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

export default PurchaseProduct;
