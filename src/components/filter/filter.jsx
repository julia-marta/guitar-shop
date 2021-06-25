import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCatalogueData} from '../../store/slice';
import FilterItem from '../filter-item/filter-item';
import FilterPrice from '../filter-price/filter-price';
import Checkbox from '../checkbox/checkbox';
import {parseDataToArrayOfValues, normalizeData, filterByPrice} from '../../utils';
import {FilterField, RUB_SYMBOL} from '../../const';

const {PRICE, GUITAR_TYPE, STRINGS} = FilterField;

const Filter = () => {

  const data = useSelector((state) => state.guitarData);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState([]);
  const [cataloguePrice, setCataloguePrice] = useState({min: 0, max: 0});

  useEffect(() => {
    const allPrices = parseDataToArrayOfValues(data, `price`);
    const max = Math.max.apply(null, allPrices);
    const min = Math.min.apply(null, allPrices);
    setFilterData(Object.values(data));
    setCataloguePrice({min, max})
  }, [data]);

  useEffect(() => {

    if (filter.price.min && filter.price.max) {

      const filtered = filterByPrice(filterData, filter.price.min, filter.price.max);
      const normalizedData = normalizeData(filtered);
      dispatch(setCatalogueData(normalizedData))
    }

  }, [dispatch, filter, filterData]);


  return (
      <form action="#" className="catalogue__filter filter">
        <h3 className="filter__title">Фильтр</h3>
        <FilterItem name={PRICE.name} legend={PRICE.legend} symbol={RUB_SYMBOL}>
          <FilterPrice inputs={PRICE.inputs} minCataloguePrice={cataloguePrice.min} maxCataloguePrice={cataloguePrice.max} />
        </FilterItem>
        <FilterItem name={GUITAR_TYPE.name} legend={GUITAR_TYPE.legend}>
          {GUITAR_TYPE.checkboxes.map((checkbox, i) => (
            <Checkbox key={i + 1} name={checkbox.name} label={checkbox.label} value={false} />
          ))}
        </FilterItem>
        <FilterItem name={STRINGS.name} legend={STRINGS.legend}>
          {STRINGS.checkboxes.map((checkbox, i) => (
            <Checkbox key={i + 1} name={checkbox.name} label={checkbox.label} value={true} />
          ))}
        </FilterItem>
      </form>
  );
};

export default Filter;
