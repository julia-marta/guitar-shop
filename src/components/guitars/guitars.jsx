import React from 'react';
import GuitarCard from '../guitar-card/guitar-card';

const Guitars = ({items}) => {

  return (
    <ul className="catalogue__list">
      {items.map((item, i) => (
        <GuitarCard key ={i + 1} guitar={item} />
      ))}
      </ul>
  );
};

export default Guitars;
