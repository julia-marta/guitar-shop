import React from 'react';
import Icon from '../icon/icon';
import Button from '../button/button';
import {IconType} from '../../const';

const PurchaseCard = ({guitar, isEmptyCard}) => {

  return (
    <li className={`cart__item purchase ${isEmptyCard ? `purchase--empty` : ``}`}>
        {isEmptyCard && <>
          <h3 className="purchase__title">
            <Icon icon={IconType.CART} />
            Ваша корзина пуста
          </h3>
          <Button title={`Продолжить покупки`} className={`pop-up__button`} type={`transparent`} />
        </>}
        {guitar && <>Карточка товара</>}
    </li>
  );
};

export default PurchaseCard;
