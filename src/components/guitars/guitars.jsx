import React from 'react';
import { useSelector} from 'react-redux';
import GuitarCard from '../guitar-card/guitar-card';

const Guitars = () => {

    const guitars = useSelector((state) => state.guitarData);
    console.log(guitars);

  return (
    <ul className="catalogue__list">
      {guitars.map((item, i) => (
        <GuitarCard key ={i + 1} guitar={item} />
      ))}
      </ul>
  );
};

export default Guitars;
