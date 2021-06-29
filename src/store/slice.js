import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit';
import Papa from 'papaparse';
import {normalizeData} from '../utils';

const csvFilePath = `https://docs.google.com/spreadsheets/d/1E6XeNhetKyCRYK68ArXQNAHj41UAClgZqEhjf7thrC0/gviz/tq?tqx=out:csv`;

const parseCsv = async (path) => {
  return new Promise((resolve, reject) => {
    Papa.parse(path, {
      download: true,
      header: true,
      complete: (results) => {
        return resolve(results);
      },
      error: (error) => {
        return reject(error);
      },
    });
  });
}

export const getData = createAsyncThunk('guitar-shop/getData',  async () => {

  try {
    const response = await parseCsv(csvFilePath);
    return response.data
  } catch (error) {
    console.error(error);
  }
});

const cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
const index = localStorage.getItem('index') ? Number(localStorage.getItem('index')) : 0;

const initialState = {
  guitarData: {},
  cartData: cartData,
  sorting: {},
  filter: {
    price: {min: ``, max: ``},
    type: {electric: false, acoustic: false, ukulele: false},
    strings: {4: false, 6: false, 7: false, 12: false}
  },
  availableStrings: [4, 6, 7, 12],
  promoCode: ``,
  orderSum: 0,
  popUp: null,
  index: index,
};

const guitarShopSlice = createSlice({
  name: 'guitar-shop',
  initialState,
  reducers: {
    openPopUp(state, action) {
      state.popUp = action.payload;
    },
    closePopUp(state, _action) {
      state.popUp = null;
    },
    setSorting(state, action) {
      state.sorting = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setAvailableStrings(state, action) {
      state.availableStrings = action.payload;
    },
    addToCart(state, action) {
      if (!state.cartData[action.payload]) {
        state.cartData[action.payload] = {id: action.payload, count: 1};
        state.index += 1;
      } else {
        state.cartData[action.payload] = {...state.cartData[action.payload], count: state.cartData[action.payload].count + 1};
      }
      localStorage.setItem('cart', JSON.stringify(state.cartData));
      localStorage.setItem('index', state.index);
    },
    changeCount(state, action) {
      state.cartData[action.payload.id] = {...state.cartData[action.payload.id], count: action.payload.count};
      localStorage.setItem('cart', JSON.stringify(state.cartData));
    },
    deleteFromCart(state, action) {
      delete state.cartData[action.payload];
      state.index -= 1;

      if (Object.keys(state.cartData).length === 0) {
        localStorage.removeItem('cart');
        localStorage.removeItem('index');
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cartData));
        localStorage.setItem('index', state.index);
      }
    },
    setOrderSum(state, action) {
      state.orderSum = action.payload;
    },
    setPromoCode(state, action) {
      state.promoCode = action.payload;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      const normalizedData = normalizeData(action.payload);

      state.guitarData = normalizedData;
      state.catalogueData = normalizedData;
    },
  },
});

const Reducer = guitarShopSlice.reducer;

export const {
    setCatalogueData,
    openPopUp,
    closePopUp,
    setSorting,
    setFilter,
    setAvailableStrings,
    addToCart,
    changeCount,
    deleteFromCart,
    setOrderSum,
    setPromoCode
  } = guitarShopSlice.actions;

export default Reducer;
