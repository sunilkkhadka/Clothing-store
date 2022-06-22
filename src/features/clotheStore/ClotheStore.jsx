import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//IMPORTING STORE API URL FROM BASEURL FILE
import { storeURL } from "../../BaseURL";

//GET ALL PRODUCTS
export const getAllProducts = createAsyncThunk(
  "clothes/getAllProducts",
  async () => {
    try {
      let response = await fetch();
      let data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//GET ALL CATEGORIES
export const getAllCategories = createAsyncThunk(
  "clothes/getAllCategories",
  async () => {
    try {
      let category_response = await fetch(`${storeURL}/categories`);
      let category_data = await category_response.json();
      // console.log(category_data);
      return category_data;
    } catch (error) {
      console.log(error);
    }
  }
);

//GET FEW PRODUCTS FOR SLIDER
export const getSliderProducts = createAsyncThunk(
  "clothes/getSliderProducts",
  async () => {
    try {
      let slider_response = await fetch(
        "https://fakestoreapi.com/products?limit=7"
      );
      let slider_data = await slider_response.json();
      console.log(slider_data);
      return slider_data;
    } catch (error) {
      console.log(error);
    }
  }
);

const ClotheStore = createSlice({
  name: "clothes",
  initialState: {
    clothe: [],
    categories: [],
    slider: [],
    isLoading: false,
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.clothe = action.payload;
      state.isLoading = false;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    [getSliderProducts.fulfilled]: (state, action) => {
      state.slider = action.payload;
      state.isLoading = false;
    },
  },
});

export default ClotheStore.reducer;
