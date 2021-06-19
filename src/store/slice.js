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
  guitarData: [],
};

const guitarShopSlice = createSlice({
  name: 'guitar-shop',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.guitarData = action.payload;
    },
  },
});

const Reducer = guitarShopSlice.reducer;

export default Reducer;
