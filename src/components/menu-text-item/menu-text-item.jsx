import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import {IconType} from '../../const';

const MenuTextItem = ({text}) => {

  return (
    <li className={`menu__item ${typeof text === `object` ? `menu__item--icon` : ``}`}>
      {typeof text === `object` ?
      <>
        <Icon icon={IconType[`${text.type.toUpperCase()}`]} />
        {text.type === `phone` ?
        <a className="menu__text menu__text--link" href={`tel:${text.content}`}>{text.content}</a> :
        <p className="menu__text">{text.content}</p>}
      </> :
      <p className="menu__text">{text}</p>}
    </li>
  )
}

MenuTextItem.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        type: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
  ]),
};

export default MenuTextItem;
