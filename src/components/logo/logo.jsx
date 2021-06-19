import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const Logo = ({type, isMain}) => {

  const image = <><img src={`svg/${type}_logo.svg`} width="67" height="70" alt="Логотип Guitar Shop"/></>;

  return (
    <div className={`${type}__logo`}>
      {/* eslint-disable-next-line */}
      {isMain ? <a className={`${type}__logo-link`} href="#">{image}</a> : <Link to={AppRoute.ROOT}>{image}</Link>}
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  isMain: PropTypes.bool,
};

export default Logo;
