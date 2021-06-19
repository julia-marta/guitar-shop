import React from 'react';
import { useSelector} from 'react-redux';

const Guitars = () => {

    
    const guitars = useSelector((state) => state.guitarData);
    console.log(guitars);

  return (
      <ul className="catalogue__list">
        <li className="catalogue__item guitar">Карточка гитары</li>
      </ul>
  );
};

export default Guitars;
