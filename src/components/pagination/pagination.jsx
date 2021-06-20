import React, {useCallback} from 'react';
import Button from '../button/button';
import {FIRST_PAGE_NUMBER, NavigationButton} from '../../const';

const Pagination = ({currentPage, totalPages, onButtonClick}) => {

  const isPreviosButton = currentPage > FIRST_PAGE_NUMBER;
  const isNextButton = currentPage < totalPages;
  const neighborButton = currentPage === FIRST_PAGE_NUMBER ? currentPage + 1 : currentPage === totalPages ? currentPage - 1 : null;

  const pages = [FIRST_PAGE_NUMBER, neighborButton ? neighborButton : currentPage, totalPages];

  const handleButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();
      const newPage = evt.target.innerText === NavigationButton.PREVIOUS ?
      currentPage - 1 : evt.target.innerText === NavigationButton.NEXT ?
      currentPage + 1 :
      Number(evt.target.innerText);

      onButtonClick(newPage);

    }, [currentPage, onButtonClick]
  );

  return (
      <ul className="catalogue__pagination pagination">
        {isPreviosButton && <li className="pagination__item pagination__item--nav"><Button title={NavigationButton.PREVIOUS} className={`pagination__button pagination__button--nav`} type={`pagination`} onClick={handleButtonClick} /></li>}
        {pages.map((page, i) => (
          <li key={i + 1} className="pagination__item">
            <Button title={page.toString()} className={`pagination__button ${page === currentPage ? `pagination__button--active` : ``}`} type={`pagination`} onClick={handleButtonClick} />
          </li>
        ))}
        {isNextButton  && <li className="pagination__item pagination__item--nav"><Button title={NavigationButton.NEXT} className={`pagination__button pagination__button--nav`} type={`pagination`} onClick={handleButtonClick} /></li>}
      </ul>
  );
};

export default Pagination;
