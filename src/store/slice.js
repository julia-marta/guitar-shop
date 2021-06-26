import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {normalizeData} from '../utils';

const BASE_URL = `https://sheet.best/api/sheets/8abd9b09-fc15-4b7a-83bd-c3f59a75e7f5`;

export const getData = createAsyncThunk('guitar-shop/getData',  async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  guitarData: {},
  catalogueData: {},
  cartData: {},
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
  index: 0,
};

const guitarShopSlice = createSlice({
  name: 'guitar-shop',
  initialState,
  reducers: {
    setCatalogueData(state, action) {
      state.catalogueData = action.payload;
    },
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
        state.cartData[action.payload] = {...state.guitarData[action.payload], count: 1};
        state.index += 1;
      } else {
        state.cartData[action.payload] = {...state.cartData[action.payload], count: state.cartData[action.payload].count + 1};
      }
    },
    changeCount(state, action) {
      state.cartData[action.payload.id] = {...state.cartData[action.payload.id], count: action.payload.count};
    },
    deleteFromCart(state, action) {
      delete state.cartData[action.payload];
      state.index -= 1;
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
