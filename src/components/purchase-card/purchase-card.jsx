import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {changeCount, openPopUp} from '../../store/slice';
import PurchaseProduct from '../purchase-product/purchase-product';
import Icon from '../icon/icon';
import Button from '../button/button';
import {parseStringToLocaleString, isNumbersOnly, isNullFirst} from '../../utils';
import {IconType, ButtonType, ControlButton, AppRoute, RUB_SYMBOL, PopUpType} from '../../const';

const MIN_COUNT = 1;

const PurchaseCard = ({guitar, isEmptyCard}) => {

  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (evt) => {
        evt.preventDefault();

        if (!isNumbersOnly(evt.target.value)) {
          dispatch(changeCount({id: guitar.id, count: MIN_COUNT}));
          return;
        }

        if (isNullFirst(evt.target.value)) {
          const correctValue = evt.target.value.replace(/^0+/, ``);
          dispatch(changeCount({id: guitar.id, count: Number(correctValue)}));
          return;
        }

        dispatch(changeCount({id: guitar.id, count: Number(evt.target.value)}));
    }, [dispatch, guitar]
  );

  const handleInputBlur = useCallback(
    (evt) => {
      if (Number(evt.target.value) < MIN_COUNT) {
        dispatch(openPopUp({name: PopUpType.DELETE.type.toUpperCase(), product: guitar.id}))
        dispatch(changeCount({id: guitar.id, count: MIN_COUNT}));
        return;
      }

      return;

    }, [dispatch, guitar]
  );

    const handleControlClick = useCallback(
    (evt) => {
      evt.preventDefault();

      switch (evt.target.id) {
        case ControlButton.DECREASE:
          const decreasedCount = guitar.count - 1;

          if (decreasedCount < MIN_COUNT) {
            dispatch(openPopUp({name: PopUpType.DELETE.type.toUpperCase(), product: guitar.id}));
            dispatch(changeCount({id: guitar.id, count: MIN_COUNT}));
            return;
          }

          dispatch(changeCount({id: guitar.id, count: decreasedCount}));

          break;
        case ControlButton.INCREASE:
          dispatch(changeCount({id: guitar.id, count: guitar.count + 1}));

          break;
        default:
          return;
      }

    }, [dispatch, guitar]
  );

  const handleDeleteButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(openPopUp({name: PopUpType.DELETE.type.toUpperCase(), product: guitar.id}))

    }, [dispatch, guitar]
  );

  return (
    <li className={`cart__item purchase ${isEmptyCard ? `purchase--empty` : ``}`}>
        {isEmptyCard && <>
          <h3 className="purchase__title">
            <Icon icon={IconType.CART} />
            Ваша корзина пуста
          </h3>
          <Button title={ButtonType.CONTINUE.title} className={`pop-up__button`} type={ButtonType.CONTINUE.type} path={AppRoute.ROOT} />
        </>}
        {guitar &&
        <>
          <button type="button" className="purchase__delete" aria-label="Удалить товар" onClick={handleDeleteButtonClick} />
          <PurchaseProduct guitar={guitar} />
          <p className="purchase__price">{`${parseStringToLocaleString(guitar.price)} ${RUB_SYMBOL}`}</p>
          <div className="purchase__quantity">
            <button id="decrease" className="purchase__сontrol purchase__сontrol--decrease" type="button" aria-label="Уменьшить" onClick={handleControlClick} />
            <label className="visually-hidden" htmlFor="quantity">Введите количество</label>
            <input className="purchase__input" type="text" id="quantity" name="quantity" value={guitar.count}
              onChange={handleInputChange} onBlur={handleInputBlur} />
            <button id="increase" className="purchase__сontrol purchase__сontrol--increase" type="button" aria-label="Увеличить" onClick={handleControlClick} />
          </div>
          <p className="purchase__sum">{`${parseStringToLocaleString(guitar.price * guitar.count)} ${RUB_SYMBOL}`}</p>
        </>}
    </li>
  );
};

PurchaseCard.propTypes = {
  guitar: PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    strings: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  isEmptyCard: PropTypes.bool,
};

export default PurchaseCard;
