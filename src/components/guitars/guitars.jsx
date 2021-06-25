import React from 'react';
import GuitarCard from '../guitar-card/guitar-card';

const Guitars = ({items}) => {

  return (
    items.length > 0 ?
    <ul className="catalogue__list">
      {items.map((item, i) => (
        <GuitarCard key ={i + 1} guitar={item} />
      ))}
      </ul> :
    <p className="catalogue__empty-message">Ничего не найдено</p>
  );
};

export default Guitars;
