import React from 'react';
import PropTypes from 'prop-types';

const Input = ({className, name, label, value, placeholder, onChangeInput, onBlurInput}) => {

  return (
    <>
      <label className="visually-hidden" htmlFor={name}>{label}</label>
      <input className={className} type="text" id={name} name={name} value={value}
        onChange={onChangeInput} onBlur={onBlurInput} placeholder={placeholder} />
    </>
  );
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
  onBlurInput: PropTypes.func.isRequired,
};

export default Input;
