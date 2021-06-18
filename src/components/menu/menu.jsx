import React from 'react';
import MenuItem from '../menu-item/menu-item';
import MenuIconItem from '../menu-icon-item/menu-icon-item';

const Menu = ({type, items, isIconsOnly}) => {

  return (
      <ul className={`menu menu__${type}`}>
      {items.map((item, i) => (
        isIconsOnly ? <MenuIconItem key ={i + 1} icon={item.type} label={item.label} /> :
        <MenuItem key ={i + 1} title={item} />
      ))}
      </ul>
  );
};

export default Menu;
