import React from 'react';
import PropTypes from 'prop-types';
import GuitarCard from '../guitar-card/guitar-card';

const Guitars = ({items}) => {

  return (
    items.length > 0 ?
    <ul className="catalogue__list">
      {items.map((item, i) => (
        <GuitarCard key ={item.id} guitar={item} />
      ))}
      </ul> :
    <p className="catalogue__empty-message">Ничего не найдено</p>
  );
};

Guitars.propTypes = {
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

export default Guitars;
