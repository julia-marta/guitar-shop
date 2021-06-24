import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({title, isActive, onClick}) => {

    return (
      <li className="menu__item">
        {/* eslint-disable-next-line */}
        <a className={`menu__link ${isActive ? `menu__link--active` : ``}`} href="#" onClick={onClick}>{title}</a>
      </li>
    )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuItem;
