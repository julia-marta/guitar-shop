import React from 'react';
import Menu from '../menu/menu';
import {SORTING_ITEMS, SORTING_TOGGLE_ITEMS} from '../../const';

const Sorting = () => {

  return (
      <div className="catalogue__sorting">
        <p className="catalogue__sorting-title">Сортировать:</p>
        <Menu type={`sorting`} items={SORTING_ITEMS} />
        <Menu type={`toggle`} items={SORTING_TOGGLE_ITEMS} isIconsOnly={true} />
      </div>
  );
};

export default Sorting;
