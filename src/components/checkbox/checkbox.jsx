import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import {IconType} from '../../const';


const Checkbox = ({name, label, value, onChangeCheckbox}) => {

//   const handleCheckboxChange = useCallback(
//     (evt) => {
//       setValue({name: evt.target.id, value :evt.target.checked ? true : false})
//     }, [setValue]
//   );

  return (
    <div className="filter__checkbox-wrapper">
      <input type="checkbox" className="filter__checkbox visually-hidden" id={name} name={name}
      checked={value} disabled />
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
//   onChangeCheckbox: PropTypes.func.isRequired,
}

export default Checkbox;