import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setAvailableStrings} from '../../store/slice';
import Filter from '../filter/filter';
import Showcase from '../showcase/showcase';
import {sortItems, parseDataToArrayOfValues, filterByPrice, filterByType, filterByStrings} from '../../utils';
import {GuitarType, ALL_STRINGS} from '../../const';

const Catalogue = () => {

  const guitarData = useSelector((state) => state.guitarData);
  const filter = useSelector((state) => state.filter);
  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  const [catalogueData, setCatalogueData] = useState(Object.values(guitarData));
  const [cataloguePrice, setCataloguePrice] = useState({min: 0, max: 0});

  useEffect(() => {
    const allPrices = parseDataToArrayOfValues(guitarData, `price`);
    const max = Math.max.apply(null, allPrices);
    const min = Math.min.apply(null, allPrices);
    setCataloguePrice({min, max})
  }, [guitarData]);

  useEffect(() => {

    const isFilterByPrice = (filter.price.min || filter.price.min === 0) || (filter.price.max || filter.price.min === 0);
    const isFilterByType = Object.values(filter.type).some((item) => item === true);
    const isFilterByStrings = Object.values(filter.strings).some((item) => item === true);
    dispatch(setAvailableStrings(ALL_STRINGS));

      let filtered = Object.values(guitarData);

      if (isFilterByPrice) {

        const minPrice = !filter.price.min ? 0 : filter.price.min;
        const maxPrice = !filter.price.max ? cataloguePrice.max : filter.price.max;
        filtered = filterByPrice(filtered, minPrice, maxPrice);
      }

      if (isFilterByType) {
        const checkedTypes = Object.entries(filter.type).reduce((acc, [type, value]) => value === true ? [...acc, GuitarType[type].name] : acc, []);
        const availableStrings = [...new Set(Object.entries(filter.type).reduce((acc, [type, value]) => value === true ? [...acc, GuitarType[type].strings] : acc, []).flat())];
        dispatch(setAvailableStrings(availableStrings))
        filtered = filterByType(filtered, checkedTypes);
      }

      if (isFilterByStrings) {
        const checkedStrings = Object.entries(filter.strings).reduce((acc, [strings, value]) => value === true ? [...acc, strings] : acc, []);
        filtered = filterByStrings(filtered, checkedStrings);
      }

      const sortedData = sortItems(filtered, sorting.type, sorting.order);

      setCatalogueData(sortedData);

  }, [guitarData, cataloguePrice, dispatch, filter, sorting]);


  return (
      <div className="catalogue__content">
        <Filter minPrice={cataloguePrice.min} maxPrice={cataloguePrice.max} />
        <Showcase guitars={catalogueData} />
      </div>
  );
};

export default Catalogue;
