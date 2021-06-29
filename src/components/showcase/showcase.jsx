import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import Sorting from '../sorting/sorting';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';
import {CARDS_PER_PAGE, FIRST_PAGE_NUMBER} from '../../const';

const Showcase = ({guitars}) => {

  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [currentRange, setCurrentRange] = useState({start: 0, end: CARDS_PER_PAGE});
  const [totalPages, setTotalPages] = useState(0);
  const [guitarsToShow, setGuitarsToShow] = useState([]);

  useEffect(() => {
    const pages = Math.ceil(guitars.length / CARDS_PER_PAGE);
    setTotalPages(pages);
    setGuitarsToShow(guitars.slice(currentRange.start, currentRange.end));
  }, [currentRange, guitars]);

  useEffect(() => {
    setCurrentPage(FIRST_PAGE_NUMBER);
    setCurrentRange({start: 0, end: CARDS_PER_PAGE});

  }, [totalPages]);

  const handlePaginationClick = useCallback(
    (newPage) => {
      setCurrentPage(newPage);
      const cardsRangeStart = CARDS_PER_PAGE * (newPage - 1);
      const cardsRandeEnd = (cardsRangeStart + CARDS_PER_PAGE) > guitars.length ? guitars.length : cardsRangeStart + CARDS_PER_PAGE;
      setCurrentRange({start: cardsRangeStart, end: cardsRandeEnd});
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

Showcase.propTypes = {
  guitars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
};

export default Showcase;
