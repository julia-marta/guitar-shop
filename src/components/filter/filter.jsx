import React from 'react';
import FilterItem from '../filter-item/filter-item';
import Input from '../input/input';
import Checkbox from '../checkbox/checkbox';
import {FilterField} from '../../const';

const {PRICE, GUITAR_TYPE, STRINGS} = FilterField;

const Filter = () => {

  return (
      <form action="#" className="catalogue__filter filter">
        <h3 className="filter__title">Фильтр</h3>
        <FilterItem name={PRICE.name} legend={PRICE.legend} symbol={String.fromCharCode(0x20BD)}>
          {PRICE.inputs.map((input, i) => (
            <Input key={i + 1} className={`filter__input`} name={input.name} label={input.label} value={``} />
          ))}
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
