import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import {SOCIAL_MENU_ITEMS, FOOTER_MENU_ITEMS, LogoType} from '../../const';

const Footer = ({isMain}) => {

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Logo type={LogoType.FOOTER} isMain={isMain} />
        <Menu type={`social`} items={SOCIAL_MENU_ITEMS} isIconsOnly={true} />
        <ul className="footer__navigation">
          {FOOTER_MENU_ITEMS.map((item, i) => (
            <li key ={i + 1} className="footer__navigation-item">
              <h3 className="footer__navigation-title">{item.title}</h3>
              {item.text ?
              <Menu type={item.type} items={item.text} isText={true} /> :
              <Menu type={item.type} items={item.items} />}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isMain: PropTypes.bool,
};

export default Footer;
