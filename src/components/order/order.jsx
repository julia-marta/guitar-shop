import React, {useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPromoCode} from '../../store/slice';
import Input from '../input/input';
import Button from '../button/button';
import {parseStringToLocaleString} from '../../utils';
import {RUB_SYMBOL, PROMOCODES, ButtonType, BadCode} from '../../const';

const Order = () => {

  const total = useSelector((state) => state.orderSum);
  const promoCode = useSelector((state) => state.promoCode);
  const dispatch = useDispatch();

  const [promoValue, setPromoValue] = useState(``);
  const [badCode, setBadCode] = useState(false);

  const handleInputChange = useCallback(
    (evt) => {
        evt.preventDefault();
        setBadCode(false);
        setPromoValue(evt.target.value)
    }, []
  );

  const handlePromoButtonClick = useCallback(
    (evt) => {
        evt.preventDefault();

        if (!PROMOCODES.includes(promoValue.toUpperCase())) {
          setBadCode(BadCode.INVALID);
          return;
        }

        if (promoCode) {
          setBadCode(BadCode.ALREADY_APPLIED);
          return;
        }

      dispatch(setPromoCode(promoValue.toUpperCase()));


    }, [dispatch, promoCode, promoValue]
  );

  return (
    <form action="#" className="cart__order order">
      <div className="order__promo">
        <p className="order__promo-title">Промокод на скидку</p>
        <p className="order__promo-subtitle">Введите свой промокод, если он у вас есть.</p>
        <div className="order__promo-wrapper">
          <Input className={`order__promo-input ${badCode ? `order__promo-input--error` : ``}`} name={`promo`} label={`Введите промокод`} value={promoValue} onChangeInput={handleInputChange} />
            {badCode && <span className="order__promo-error">{`${badCode === BadCode.INVALID ? `Промокод не действителен` : `Вы уже активировали промокод`}`}</span>}
          <Button title={ButtonType.PROMO.title} className={`order__button order__button--promo`} type={ButtonType.PROMO.type} onClick={handlePromoButtonClick} />
        </div>
      </div>
      <div className="order__checkout">
        <p className="order__checkout-total">{`Всего: ${parseStringToLocaleString(total)} ${RUB_SYMBOL}`}</p>
        <Button title={ButtonType.CHECKOUT.title} className={`order__button order__button--checkout`} type={ButtonType.CHECKOUT.type} />
      </div>
    </form>
  );
};

export default Order;
