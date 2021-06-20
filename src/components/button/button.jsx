import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';

const Button = ({title, className, type, icon, onClick}) => {

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className={`${className} button ${type ? `button--${type}` : ``}`} onClick={onClick}>
        {icon && <Icon icon={icon} />}
        {title}
      </a>
    )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

export default Button;
