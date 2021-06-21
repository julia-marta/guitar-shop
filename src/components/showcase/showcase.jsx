import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Sorting from '../sorting/sorting';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';
import {CARDS_PER_PAGE, FIRST_PAGE_NUMBER} from '../../const';

const Showcase = () => {

  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [totalPages, setTotalPages] = useState(0);
  const [guitars, setGuitars] = useState([]);
  const [guitarsToShow, setGuitarsToShow] = useState([]);

  const guitarsData = useSelector((state) => state.guitarData);

  useEffect(() => {
    const pages = Math.ceil(Object.values(guitarsData).length / CARDS_PER_PAGE);
    setTotalPages(pages);
    setCurrentPage(FIRST_PAGE_NUMBER);
    setGuitars(Object.values(guitarsData));
    setGuitarsToShow(Object.values(guitarsData).slice(0, CARDS_PER_PAGE));
  }, [guitarsData]);

  const handlePaginationClick = useCallback(
    (newPage) => {
      setCurrentPage(newPage);
      const cardsRangeStart = CARDS_PER_PAGE * (newPage - 1);
      const cardsRandeEnd = (cardsRangeStart + CARDS_PER_PAGE) > guitars.length ? guitars.length : cardsRangeStart + CARDS_PER_PAGE;

      setGuitarsToShow(guitars.slice(cardsRangeStart, cardsRandeEnd));
    }, [guitars]
  );

  return (
      <div className="catalogue__showcase">
        <Sorting />
        <Guitars items={guitarsToShow} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onButtonClick={handlePaginationClick} />
      </div>
  );
};

export default Showcase;
