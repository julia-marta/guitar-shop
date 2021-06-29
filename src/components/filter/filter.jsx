import React from 'react';
import FilterItem from '../filter-item/filter-item';
import FilterPrice from '../filter-price/filter-price';
import FilterType from '../filter-type/filter-type';
import FilterStrings from '../filter-strings/filter-strings';
import {FilterField, RUB_SYMBOL} from '../../const';

const {PRICE, GUITAR_TYPE, STRINGS} = FilterField;

const Filter = ({minPrice, maxPrice}) => {

  return (
      <form action="#" className="catalogue__filter filter">
        <h3 className="filter__title">Фильтр</h3>
        <FilterItem name={PRICE.name} legend={PRICE.legend} symbol={RUB_SYMBOL}>
          <FilterPrice inputs={PRICE.inputs} minCataloguePrice={minPrice} maxCataloguePrice={maxPrice} />
        </FilterItem>
        <FilterItem name={GUITAR_TYPE.name} legend={GUITAR_TYPE.legend}>
          <FilterType checkboxes={GUITAR_TYPE.checkboxes} />
        </FilterItem>
        <FilterItem name={STRINGS.name} legend={STRINGS.legend}>
          <FilterStrings checkboxes={STRINGS.checkboxes} />
        </FilterItem>
      </form>
  );
};

export default Filter;
