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
  cartData: {}
};

const guitarShopSlice = createSlice({
  name: 'guitar-shop',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartData[action.payload] = state.guitarData[action.payload];
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

export default Reducer;
