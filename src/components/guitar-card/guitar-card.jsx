import React from 'react';
import Icon from '../icon/icon';
import Button from '../button/button';
import {STARS, IconType} from '../../const';

const getStarsCount = (reviewsCount) => {
  return Math.round((reviewsCount / 10) * 1.7);
}

const GuitarCard = ({guitar}) => {

  const rating = getStarsCount(guitar.rating);

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
          {STARS.map((star, i) => (
            <li key={i + 1} className="guitar__star">
              {i < rating ? <Icon icon={IconType.STAR} /> : <Icon icon={IconType.STAR_EMPTY} /> }
            </li>
          ))}
        </ul>
        <span className="guitar__wrapper guitar__reviews">{guitar.rating}</span>
      </div>
      <div className="guitar__wrapper guitar__info">
        <p className="guitar__text">{guitar.title}</p>
        <p className="guitar__text">{`${Number(guitar.price).toLocaleString('ru-RU')} ${String.fromCharCode(0x20BD)}`}</p>
      </div>
      <div className="guitar__wrapper guitar__buttons">
        <Button title={`Подробнее`} className="guitar__button" type={`mono`} />
        <Button title={`Купить`} className="guitar__button" type={`color`} icon={IconType.CART} />
      </div>
    </li>
  );
};

export default GuitarCard;
