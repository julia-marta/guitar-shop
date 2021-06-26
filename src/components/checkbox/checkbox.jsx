import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import {IconType} from '../../const';

const Checkbox = ({name, label, value, disabled, onChangeCheckbox}) => {

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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChangeCheckbox: PropTypes.func.isRequired,
}

export default Checkbox;