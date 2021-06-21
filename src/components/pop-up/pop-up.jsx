import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import PurchaseProduct from '../purchase-product/purchase-product';
import Button from '../button/button';


const PopUp = ({type, title, productId, buttons}) => {

  const product = useSelector((state) => state.guitarData[productId]) || null;

//   const handleCloseButtonClick = useCallback(
//     () => {
//       onClose(ModalType.POP_UP);
//     }, [onClose]
//   );

  return (
    <section className="pop-up">
      <h2 className="visually-hidden">Информационное сообщение</h2>
      <div className={`pop-up__window pop-up__window--${type}`}>
        <button type="button" className="pop-up__close" aria-label="Закрыть поп-ап" />
        <h3 className="pop-up__title">{title}</h3>
        <div className="pop-up__content">
          {product && <div className="pop-up__item">
            <PurchaseProduct guitar={product} isPopUp={true} />
          </div>}
          <div className="pop-up__buttons">
            {buttons.map((button, i) => (
              <Button key={i + 1} title={button.title} className={`pop-up__button`} type={button.type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// PopUp.propTypes = {

// };

export default PopUp;
