import React from 'react';
import PropTypes from "prop-types";

const Logo = ({type}) => {

  return (
    <div className={`${type}__logo`}>
      {/* eslint-disable-next-line */}
      <a href="#">
        <img src={`svg/${type}_logo.svg`} width="67" height="70" alt="Логотип Guitar Shop"/>
      </a>
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Logo;
