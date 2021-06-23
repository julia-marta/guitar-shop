import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {openPopUp} from '../../store/slice';
import Icon from '../icon/icon';
import Button from '../button/button';
import {parseStringToLocaleString, getStarsCount} from '../../utils';
import {IconType, PopUpType, ButtonType, STARS, RUB_SYMBOL} from '../../const';

const GuitarCard = ({guitar}) => {

  const dispatch = useDispatch();

  const rating = getStarsCount(guitar.rating);

  const handleBasketButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(openPopUp({name: PopUpType.ADD.type.toUpperCase(), product: guitar.id}))
    }, [dispatch, guitar]
  );

  return (
    <li className="catalogue__item guitar">
      <div className="guitar__wrapper guitar__image">
        <picture>
          <img className="guitar__picture" src={`guitars/${guitar.image}.png`}
          srcSet={`guitars/${guitar.image}@2x.png 2x`} width="68" height="190" alt={`Фотография гитары ${guitar.title}`}/>
        </picture>
      </div>
      <div className="guitar__wrapper guitar__rating">
        <ul className="guitar__star-list">
          {STARS.map((_star, i) => (
            <li key={i + 1} className="guitar__star">
              {i < rating ? <Icon icon={IconType.STAR} /> : <Icon icon={IconType.STAR_EMPTY} /> }
            </li>
          ))}
        </ul>
        <span className="guitar__wrapper guitar__reviews">{guitar.rating}</span>
      </div>
      <div className="guitar__wrapper guitar__info">
        <p className="guitar__text">{guitar.title}</p>
        <p className="guitar__text">{`${parseStringToLocaleString(guitar.price)} ${RUB_SYMBOL}`}</p>
      </div>
      <div className="guitar__wrapper guitar__buttons">
        <Button title={ButtonType.MORE.title} className={`guitar__button`} type={ButtonType.MORE.type} />
        <Button title={ButtonType.BUY.title} className={`guitar__button guitar__button--basket`} type={ButtonType.BUY.type}
        icon={IconType.CART} onClick={handleBasketButtonClick} />
      </div>
    </li>
  );
};

export default GuitarCard;
