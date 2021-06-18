import React from 'react';
import PropTypes from "prop-types";
import Icon from '../icon/icon';
import {IconType} from '../../const';

const MenuIconItem = ({icon, label}) => {

    return (
      <li className="menu__item">
        {/* eslint-disable-next-line */}
        <a className="menu__link" href="#" aria-label={label}>
          <Icon icon={IconType[`${icon.toUpperCase()}`]} />
        </a>
      </li>
    )
}

MenuIconItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuIconItem;
