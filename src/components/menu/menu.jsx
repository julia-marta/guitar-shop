import React from 'react';
import MenuItem from '../menu-item/menu-item';
import MenuIconItem from '../menu-icon-item/menu-icon-item';
import MenuTextItem from '../menu-text-item/menu-text-item';
import MenuBasketItem from '../menu-basket-item/menu-basket-item';

const Menu = ({type, items, activeItem, isText, isIconsOnly, onItemClick}) => {

  return (
    <ul className={`menu menu--${type}`}>
      {items.map((item, i) => (
        isText ? <MenuTextItem key ={i + 1} text={item} /> :
        item.type === `basket` ? <MenuBasketItem key ={i + 1} icon={item.type} label={item.label} /> :
        isIconsOnly ? <MenuIconItem key ={i + 1} icon={item.type} label={item.label} onClick={onItemClick} /> :
        <MenuItem key ={i + 1} title={item} onClick={onItemClick} isActive={item === activeItem} />
      ))}
    </ul>
  );
};

export default Menu;
