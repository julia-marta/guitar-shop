import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setFilter} from '../../store/slice';
import Checkbox from '../checkbox/checkbox';

const FilterType = ({checkboxes}) => {

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleCheckboxChange = useCallback(
    (evt) => {
       dispatch(setFilter({...filter, type: {...filter.type, [evt.target.id]: evt.target.checked ? true : false}}));

    }, [dispatch, filter]
  );

  return (
      <>
        {checkboxes.map((checkbox, i) => (
          <Checkbox key={i + 1} name={checkbox.name} label={checkbox.label}
            value={filter.type[checkbox.name]} onChangeCheckbox={handleCheckboxChange} />
        ))}
      </>
  );
};

export default FilterType;
