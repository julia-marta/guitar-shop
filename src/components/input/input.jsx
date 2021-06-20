import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, label, value, placeholder, onChangeInput}) => {

  return (
    <>
      <label className="visually-hidden" htmlFor={name}>{label}</label>
      <input className="filter__input" type="text" id={name} name={name} value={value}
        onChange={onChangeInput} placeholder={placeholder} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
};

export default Input;
