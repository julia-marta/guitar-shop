import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Icon from '../icon/icon';
import {IconType, AppRoute} from '../../const';

const MenuIconItem = ({icon, label}) => {

    return (
      <li className="menu__item">
        {icon === `basket` ?
          <Link className="menu__link" to={AppRoute.CART} aria-label={label}>
            <Icon icon={IconType[`${icon.toUpperCase()}`]} />
            <sup className="menu__index">2</sup>
          </Link> :
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="menu__link" href="#" aria-label={label}>
            <Icon icon={IconType[`${icon.toUpperCase()}`]} />
          </a>}
      </li>
    )
}

MenuIconItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuIconItem;
