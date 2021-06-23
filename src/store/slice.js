import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

const BASE_URL = `https://sheetdb.io/api/v1/gzbb5ctzqa6f3`;

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
  cartData: {},
  popUp: null,
  index: 0,
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
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      const normalizedData = action.payload.reduce((result, item, index) => {
        result[index + 1] = item;
        return result;
      }, {});
      state.guitarData = normalizedData;
    },
  },
});

const Reducer = guitarShopSlice.reducer;

export const {openPopUp, closePopUp, addToCart, changeCount, deleteFromCart} = guitarShopSlice.actions;

export default Reducer;
