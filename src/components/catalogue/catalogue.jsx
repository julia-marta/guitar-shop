import React from 'react';
import Filter from '../filter/filter';
import Showcase from '../showcase/showcase';

const Catalogue = () => {

  return (
      <div className="catalogue__content">
        <Filter/>
        <Showcase/>
      </div>
  );
};

export default Catalogue;
