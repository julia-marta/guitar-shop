import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCatalogueData} from '../../store/slice';
import FilterItem from '../filter-item/filter-item';
import FilterPrice from '../filter-price/filter-price';
import FilterType from '../filter-type/filter-type';
import Checkbox from '../checkbox/checkbox';
import {parseDataToArrayOfValues, normalizeData, filterByPrice, filterByType} from '../../utils';
import {FilterField, GuitarType, RUB_SYMBOL} from '../../const';

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

    const isFilterByPrice = filter.price.min && filter.price.max;
    const isFilterByType = Object.values(filter.type).some((item) => item === true);


    let filtered = filterData;

    if (isFilterByPrice) {
      filtered = filterByPrice(filterData, filter.price.min, filter.price.max);
    }

    if (isFilterByType) {
      const checkedTypes = Object.entries(filter.type).reduce((acc, [type, value]) => value === true ? [...acc, GuitarType[type].name] : acc, [])
      filtered = filterByType(filtered, checkedTypes);
    }

    const normalizedData = normalizeData(filtered);
    dispatch(setCatalogueData(normalizedData))

  }, [dispatch, filter, filterData]);


  return (
      <form action="#" className="catalogue__filter filter">
        <h3 className="filter__title">Фильтр</h3>
        <FilterItem name={PRICE.name} legend={PRICE.legend} symbol={RUB_SYMBOL}>
          <FilterPrice inputs={PRICE.inputs} minCataloguePrice={cataloguePrice.min} maxCataloguePrice={cataloguePrice.max} />
        </FilterItem>
        <FilterItem name={GUITAR_TYPE.name} legend={GUITAR_TYPE.legend}>
          <FilterType checkboxes={GUITAR_TYPE.checkboxes} />
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
