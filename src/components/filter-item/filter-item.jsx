import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({name, legend, symbol, children}) => {

  return (
    <fieldset className={`filter__item filter__item--${name}`}>
      <h3 className="filter__title filter__title--subtitle">{legend} {symbol && <span>{symbol}</span>}</h3>
      <div className={`filter__wrapper filter__wrapper--${name}`}>
        {children}
      </div>
    </fieldset>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
}

export default FilterItem;
