import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {setFilter} from '../../store/slice';
import Input from '../input/input';
import {parseStringToLocaleString, formatString, isNumbersOnly} from '../../utils';

const FilterPrice = ({inputs, minCataloguePrice, maxCataloguePrice}) => {

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const minPlaceholder = parseStringToLocaleString(minCataloguePrice);
  const maxPlaceholder = parseStringToLocaleString(maxCataloguePrice);

  const isMinPriceMoreThanMaxPrice = filter.price.min && (filter.price.max || filter.price.max === 0) && filter.price.min > filter.price.max;
  const isMinPriceLessThanMinCataloguePrice = (filter.price.min || filter.price.min === 0) && filter.price.min < minCataloguePrice;
  const isMaxPriceMoreThanMaxCataloguePrice = filter.price.max && filter.price.max > maxCataloguePrice;

  const handleInputChange = useCallback(
    (evt) => {
        evt.preventDefault();

        const newValue = formatString(evt.target.value);

        if (!isNumbersOnly(newValue)) {
          return;
        }

        dispatch(setFilter({...filter, price: {...filter.price, [evt.target.id]: Number(newValue)}}));

    }, [dispatch, filter]
  );

  const handleInputBlur = useCallback(
    (evt) => {
      const currentInput = evt.target.id;

      let correctPrice;

      if (isMinPriceMoreThanMaxPrice) {
        correctPrice = currentInput === `min` ? {max: filter.price.max, min: filter.price.max} : {max: filter.price.min, min: filter.price.min}
      }

      if (isMinPriceLessThanMinCataloguePrice) {
        correctPrice = {max: filter.price.max, min: minCataloguePrice};
      }

      if (isMaxPriceMoreThanMaxCataloguePrice) {
        correctPrice = {max: maxCataloguePrice, min: filter.price.min};
      }

      if (correctPrice) {
        dispatch(setFilter({...filter, price: {min: correctPrice.min, max: correctPrice.max}}));
      }

      return;

    }, [dispatch, filter, isMaxPriceMoreThanMaxCataloguePrice, isMinPriceLessThanMinCataloguePrice, isMinPriceMoreThanMaxPrice, maxCataloguePrice, minCataloguePrice]
  );

  return (
      <>
        {inputs.map((input, i) => (
          <Input key={i + 1} className={`filter__input`} name={input.name} label={input.label}
            value={filter.price[input.name] > 0 ? parseStringToLocaleString(filter.price[input.name]) : filter.price[input.name] === 0 ? `0` : ``}
            placeholder={input.name === `min` ? minPlaceholder : maxPlaceholder} onChangeInput={handleInputChange} onBlurInput={handleInputBlur} />
        ))}
      </>
  );
};

FilterPrice.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  minCataloguePrice: PropTypes.number.isRequired,
  maxCataloguePrice: PropTypes.number.isRequired,
};

export default FilterPrice;
