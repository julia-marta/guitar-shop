import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Icon from '../icon/icon';

const Button = ({title, className, type, icon, path, onClick}) => {

    return (
      path ?
      <Link to={path} className={`${className} button ${type ? `button--${type}` : ``}`} >
        {icon && <Icon icon={icon} />}
        {title}
      </Link> :
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
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
