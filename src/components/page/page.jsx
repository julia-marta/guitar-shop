import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {closePopUp} from '../../store/slice';
import Header from '../header/header';
import Main from '../main/main';
import Catalogue from '../catalogue/catalogue';
import Cart from '../cart/cart';
import Footer from '../footer/footer';
import PopUp from '../pop-up/pop-up';
import {PageType, PopUpType, Key} from '../../const';

const Page = ({type}) => {

  const isMain = type === PageType.MAIN;
  const popUp = useSelector((state) => state.popUp);
  const dispatch = useDispatch();

  useEffect(() => {
    if (popUp) {
      document.body.style.overflow = `hidden`;
      document.addEventListener(`keydown`, handleEscKeyDown);
    } else {
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, handleEscKeyDown);
    }
  });

  const handleEscKeyDown = useCallback(
    (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
        evt.preventDefault();
        dispatch(closePopUp());
      }
    }, [dispatch]
  );

  return (
    <>
      <Header isMain={isMain} />
      <Main type={type} isMain={isMain}>
        {isMain ? <Catalogue /> : <Cart />}
      </Main>
      <Footer isMain={isMain} />
      {popUp &&
        <PopUp type={PopUpType[popUp.name].type} title={PopUpType[popUp.name].title}
        buttons={PopUpType[popUp.name].buttons} productId={popUp.product} />}
    </>
  );
};

Page.propTypes = {
 type: PropTypes.string.isRequired,
};

export default Page;
