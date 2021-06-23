import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Icon from '../icon/icon';
import {IconType, AppRoute} from '../../const';

const MenuBasketItem = ({icon, label}) => {

    const index = useSelector((state) => state.index);

    return (
      <li className="menu__item">
        <Link className="menu__link" to={AppRoute.CART} aria-label={label}>
          <Icon icon={IconType[`${icon.toUpperCase()}`]} />
          <sup className="menu__index">{index}</sup>
        </Link>
      </li>
    )
}

MenuBasketItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuBasketItem;
