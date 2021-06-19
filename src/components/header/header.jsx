import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import {HEADER_MENU_ITEMS, USER_MENU_ITEMS} from '../../const';

const Header = ({isMain}) => {

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo type={`header`} isMain={isMain} />
        <nav className="header__navigation">
          <Menu type={`main`} items={HEADER_MENU_ITEMS} />
          <Menu type={`user`} items={USER_MENU_ITEMS} isIconsOnly={true} />
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
};

export default Header;
