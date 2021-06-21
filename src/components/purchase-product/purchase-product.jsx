import React from 'react';

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
        <p className="purchase__text">{`${guitar.type[0].toUpperCase() + guitar.type.substring(1)}, ${guitar.strings} струнная`}</p>
        {isPopUp && <p className="purchase__sum">{`Цена: ${Number(guitar.price).toLocaleString('ru-RU')} ${String.fromCharCode(0x20BD)}`}</p>}
      </div>
    </>
  );
};

export default PurchaseProduct;
