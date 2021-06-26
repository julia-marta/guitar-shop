import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {setFilter} from '../../store/slice';
import Checkbox from '../checkbox/checkbox';

const FilterStrings = ({checkboxes}) => {

  const filter = useSelector((state) => state.filter);
  const availableStrings = useSelector((state) => state.availableStrings);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (evt) => {
       dispatch(setFilter({...filter, strings: {...filter.strings, [evt.target.id]: evt.target.checked ? true : false}}));

    }, [dispatch, filter]
  );

  return (
      <>
        {checkboxes.map((checkbox, i) => (
          <Checkbox key={i + 1} name={checkbox.name} label={checkbox.label}
          value={filter.strings[checkbox.name]} onChangeCheckbox={handleCheckboxChange} disabled={!availableStrings.includes(checkbox.name)} />
        ))}
      </>
  );
};

FilterStrings.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default FilterStrings;
