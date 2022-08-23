import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductsReducer from "../features/products/ProductsSlice";

export const store = configureStore({
	reducer: {
		products: ProductsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
