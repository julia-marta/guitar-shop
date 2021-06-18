import React from 'react';
import Logo from "../logo/logo";
import Menu from '../menu/menu';
import {HEADER_MENU_ITEMS, USER_MENU_ITEMS} from "../../const";

const Header = () => {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo type={`header`} />
        <nav className="header__navigation">
          <Menu type={`main`} items={HEADER_MENU_ITEMS} />
          <Menu type={`user`} items={USER_MENU_ITEMS} isIconsOnly={true} />
        </nav>
      </div>
    </header>
  );
};

export default Header;