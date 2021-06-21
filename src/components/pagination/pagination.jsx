import React, {useCallback} from 'react';
import Button from '../button/button';
import {FIRST_PAGE_NUMBER, NavigationButton} from '../../const';

const {PREVIOUS, NEXT, DOTS} = NavigationButton;
const PAGER_SIZE = 3;

const Pagination = ({currentPage, totalPages, onButtonClick}) => {

  const pages = {
    previous: currentPage > FIRST_PAGE_NUMBER ? PREVIOUS : false,
    first: FIRST_PAGE_NUMBER,
    prevDots: currentPage > FIRST_PAGE_NUMBER + 1 && totalPages > PAGER_SIZE ? DOTS : false,
    currentPage: currentPage === FIRST_PAGE_NUMBER ? currentPage + 1 : currentPage === totalPages ? currentPage - 1 : currentPage,
    nextDots: currentPage < totalPages - 1 && totalPages > PAGER_SIZE ? DOTS : false,
    last: totalPages,
    next: currentPage < totalPages ? NEXT : false,
  };

  const handleButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();

      if (evt.target.innerText === DOTS) {
        return;
      };

      const newPage = evt.target.innerText === PREVIOUS ?
      currentPage - 1 : evt.target.innerText === NEXT ?
      currentPage + 1 :
      Number(evt.target.innerText);

      onButtonClick(newPage);

    }, [currentPage, onButtonClick]
  );

  return (
      <ul className="catalogue__pagination pagination">
        {Object.values(pages).map((page, i) => (
          page ? <li key={i + 1} className={`pagination__item ${page === PREVIOUS || page === NEXT ? `pagination__item--nav` : ``}`}>
            <Button title={page.toString()} className={`pagination__button ${page === currentPage ? `pagination__button--active` : page === PREVIOUS || page === NEXT ? `pagination__button--nav` : page === DOTS ? `pagination__button--dots` : ``}`} 
              type={`pagination`} onClick={handleButtonClick} />
         </li> : ``
        ))}
      </ul>
  );
};

export default Pagination;
