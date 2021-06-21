import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Main from '../main/main';
import Catalogue from '../catalogue/catalogue';
import Cart from '../cart/cart';
import Footer from '../footer/footer';
import PopUp from '../pop-up/pop-up';
import {PageType, PopUpType, Key} from '../../const';

const Page = ({type}) => {

  const isMain = type === PageType.MAIN;

  const [activePopUp, setActivePopUp] = useState(`DELETE`);
  const [activeProduct, setActiveProduct] = useState(8);

  useEffect(() => {
    if (activePopUp) {
      document.body.style.overflow = `hidden`;
      document.addEventListener(`keydown`, handleEscKeyDown);
    } else {
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, handleEscKeyDown);
    }
  });

  const handlePopUpOpening = useCallback(
    (name, product) => {
      if (product) {
        setActiveProduct(product);
      }
      setActivePopUp(name.toUpperCase());
    }, []
  );

  const handlePopUpClosing = useCallback(
    () => {
      if (activeProduct) {
        setActiveProduct(null);
      }
      setActivePopUp(null);
    }, [activeProduct]
  );

  const handleEscKeyDown = useCallback(
    (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
        evt.preventDefault();
        if (activeProduct) {
          setActiveProduct(null);
        }
        setActivePopUp(null);
      }
    }, [activeProduct]
  );

  return (
    <>
      <Header isMain={isMain} />
      <Main type={type} isMain={isMain}>
        {isMain ? <Catalogue/> : <Cart/>}
      </Main>
      <Footer isMain={isMain} />
      {activePopUp &&
        <PopUp type={PopUpType[activePopUp].type} title={PopUpType[activePopUp].title}
        buttons={PopUpType[activePopUp].buttons} productId={activeProduct} />}
    </>
  );
};

Page.propTypes = {
 type: PropTypes.string.isRequired,
};

export default Page;
