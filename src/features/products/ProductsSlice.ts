import { createSlice } from "@reduxjs/toolkit";
import foodData from "../../assets/foods";

const initialState = {
	foods: foodData,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		showFoods: (state) => {},
	},
});

export const { showFoods } = productSlice.actions;

export default productSlice.reducer;
