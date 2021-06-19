
import React from 'react';
import PropTypes from 'prop-types';
import {PageTitle} from '../../const';

const Main = ({type, children}) => {

  return (
    <main className="main">
      <h1 className="visually-hidden">Guitar Shop: магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</h1>
      <section className={type}>
        <div className={`${type}__wrapper container`}>
          <h2 className={`${type}__title`}>{PageTitle[`${type.toUpperCase()}`]}</h2>
          {children}
        </div>
      </section>
    </main>
  );
};

Main.propTypes = {
 type: PropTypes.string.isRequired,
 children: PropTypes.element.isRequired,
};

export default Main;