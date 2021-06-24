import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Sorting from '../sorting/sorting';
import Guitars from '../guitars/guitars';
import Pagination from '../pagination/pagination';
import {CARDS_PER_PAGE, FIRST_PAGE_NUMBER} from '../../const';
import {sortItems} from '../../utils';

const Showcase = () => {

  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [totalPages, setTotalPages] = useState(0);
  const [currentRange, setCurrentRange] = useState({start: 0, end: CARDS_PER_PAGE})
  const [guitars, setGuitars] = useState([]);
  const [guitarsToShow, setGuitarsToShow] = useState([]);

  const catalogueData = useSelector((state) => state.catalogueData);
  const sorting = useSelector((state) => state.sorting);

  useEffect(() => {
    const pages = Math.ceil(Object.values(catalogueData).length / CARDS_PER_PAGE);
    const sortedData = sortItems(Object.values(catalogueData), sorting.type, sorting.order);
    console.log(`test`)
    setTotalPages(pages);
    setGuitars(sortedData);
  }, [catalogueData, sorting]);

  useEffect(() => {
    if (guitars.length !== 0) {
      setGuitarsToShow(guitars.slice(currentRange.start, currentRange.end));
    }
  }, [currentRange, guitars]);

  // const handleSorting = useCallback(
  //   (type, order) => {
  //     const sortedData = sortItems(guitars, type, order);
  //     setCurrentPage(newPage);
  //     const cardsRangeStart = CARDS_PER_PAGE * (newPage - 1);
  //     const cardsRandeEnd = (cardsRangeStart + CARDS_PER_PAGE) > guitars.length ? guitars.length : cardsRangeStart + CARDS_PER_PAGE;
  //     setCurrentRange({start: cardsRangeStart, end: cardsRandeEnd});
  //   }, [guitars]
  // );

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

export default Showcase;
