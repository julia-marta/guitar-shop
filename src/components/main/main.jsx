
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {PageTitle, BREADCRUMBS} from '../../const';

const Main = ({type, children, isMain}) => {

  const breadcrumbs = isMain ? BREADCRUMBS.slice(0, BREADCRUMBS.length - 1) : BREADCRUMBS;

  return (
    <main className="main">
      <h1 className="visually-hidden">Guitar Shop: магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</h1>
      <section className={type}>
        <div className={`${type}__wrapper container`}>
          <h2 className={`${type}__title`}>{PageTitle[`${type.toUpperCase()}`]}</h2>
          <Breadcrumbs items={breadcrumbs} />
          {children}
        </div>
      </section>
    </main>
  );
};

Main.propTypes = {
 type: PropTypes.string.isRequired,
 children: PropTypes.element.isRequired,
 isMain: PropTypes.bool,
};

export default Main;
