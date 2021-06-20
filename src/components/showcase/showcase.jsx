import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Sorting from '../sorting/sorting';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';
import {CARDS_PER_PAGE, FIRST_PAGE_NUMBER, DEFAULT_CARDS_RANGE} from '../../const';

const Showcase = () => {

  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [totalPages, setTotalPages] = useState(0);
  const [currentCardsRange, setCurrentCardsRange] = useState(DEFAULT_CARDS_RANGE);
  const [guitarsToShow, setGuitarsToShow] = useState([]);

  const guitars = useSelector((state) => state.guitarData);

  useEffect(() => {
    const pages = Math.floor(guitars.length / CARDS_PER_PAGE)
    setTotalPages(pages);
    setCurrentPage(FIRST_PAGE_NUMBER);
    setCurrentCardsRange(DEFAULT_CARDS_RANGE);
    setGuitarsToShow(guitars.slice(DEFAULT_CARDS_RANGE.first, DEFAULT_CARDS_RANGE.last));
  }, [guitars]);

  const handlePaginationClick = useCallback(
    (newPage) => {
      setCurrentPage(newPage);
      const cardsRangeStart = newPage < currentPage ? currentCardsRange.first - CARDS_PER_PAGE : currentCardsRange.first + CARDS_PER_PAGE;
      const cardsRandeEnd = (cardsRangeStart + CARDS_PER_PAGE) > guitars.length ? guitars.length : cardsRangeStart + CARDS_PER_PAGE;
      console.log(cardsRangeStart, cardsRandeEnd)
      
      setCurrentCardsRange({first: cardsRangeStart, last: cardsRandeEnd});
      setGuitarsToShow(guitars.slice(cardsRangeStart, cardsRandeEnd));
    }, [currentCardsRange, currentPage, guitars]
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
