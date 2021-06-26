import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {openPopUp, closePopUp, addToCart, deleteFromCart} from '../../store/slice';
import PurchaseProduct from '../purchase-product/purchase-product';
import Button from '../button/button';
import {PopUpType, ButtonType, AppRoute} from '../../const';

const PopUp = ({type, title, productId, buttons}) => {

  const product = useSelector((state) => state.guitarData[productId]) || null;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCloseButtonClick = useCallback(
    (evt) => {
        evt.preventDefault();
        dispatch(closePopUp());
    }, [dispatch]
  );

  const handlePopUpButtonClick = useCallback(
    (evt) => {
      evt.preventDefault();

      switch(evt.target.innerText) {
        case ButtonType.ADD.title:
          dispatch(addToCart(productId))
          dispatch(closePopUp());
          dispatch(openPopUp({name: PopUpType.SUCCESS.type.toUpperCase()}))
        break;
        case ButtonType.CONTINUE.title:
          dispatch(closePopUp());
        break;
        case ButtonType.GO_TO_BASKET.title:
          dispatch(closePopUp());
          history.push(AppRoute.CART);
          break;
        case ButtonType.DELETE.title:
          dispatch(deleteFromCart(productId))
          dispatch(closePopUp());
        break;
        default:
        break;
      }
    }, [dispatch, history, productId]
  );

  return (
    <section className="pop-up" onClick={handleCloseButtonClick}>
      <h2 className="visually-hidden">Информационное сообщение</h2>
      <div className={`pop-up__window pop-up__window--${type}`} onClick={(evt) => evt.stopPropagation()}>
        <button type="button" className="pop-up__close" aria-label="Закрыть поп-ап" onClick={handleCloseButtonClick} />
        <h3 className="pop-up__title">{title}</h3>
        <div className="pop-up__content">
          {product && <div className="pop-up__item">
            <PurchaseProduct guitar={product} isPopUp={true} />
          </div>}
          <div className="pop-up__buttons">
            {buttons.map((button, i) => (
              <Button key={i + 1} title={button.title} className={`pop-up__button`} type={button.type} onClick={handlePopUpButtonClick} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

PopUp.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  productId: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PopUp;
