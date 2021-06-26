import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {setFilter} from '../../store/slice';
import Icon from '../icon/icon';
import {IconType} from '../../const';

const Checkbox = ({name, label, value, disabled, onChangeCheckbox}) => {

  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (disabled && value) {
      dispatch(setFilter({...filter, strings: {...filter.strings, [name]: false}}))
    }
  }, [disabled, dispatch, filter, name, value]);

  return (
    <div className="filter__checkbox-wrapper">
      <input type="checkbox" className="filter__checkbox visually-hidden" id={name} name={name}
      checked={value} disabled={disabled} onChange={onChangeCheckbox}/>
      <label className="filter__label" htmlFor={name}>
        {label}
        <Icon icon={IconType.CHECKBOX} />
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
    ]).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChangeCheckbox: PropTypes.func.isRequired,
}

export default Checkbox;