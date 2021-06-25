import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Filter from '../filter/filter';
import Showcase from '../showcase/showcase';
import {sortItems} from '../../utils';

const Catalogue = () => {

  const [guitars, setGuitars] = useState([]);
  const catalogueData = useSelector((state) => state.catalogueData);
  const sorting = useSelector((state) => state.sorting);

  useEffect(() => {
    const sortedData = sortItems(Object.values(catalogueData), sorting.type, sorting.order);
    setGuitars(sortedData);

  }, [catalogueData, sorting]);


  return (
      <div className="catalogue__content">
        <Filter />
        <Showcase guitars={guitars} />
      </div>
  );
};

export default Catalogue;
