import React from 'react';
import Sorting from '../sorting/sorting';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';

const Showcase = () => {

  return (
      <div className="catalogue__showcase">
        <Sorting />
        <Guitars />
        <Pagination />
      </div>
  );
};

export default Showcase;
