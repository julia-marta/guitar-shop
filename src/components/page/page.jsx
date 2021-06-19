import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Main from '../main/main';
import Catalogue from '../catalogue/catalogue';
import Cart from '../cart/cart';
import Footer from '../footer/footer';
import {PageType} from '../../const';

const Page = ({type}) => {

  const isMain = type === PageType.MAIN;

  return (
    <>
      <Header isMain={isMain} />
      <Main type={type} isMain={isMain}>
        {isMain ? <Catalogue/> : <Cart/>}
      </Main>
      <Footer isMain={isMain} />
    </>
  );
};

Page.propTypes = {
 type: PropTypes.string.isRequired,
};

export default Page;
