import { IProductsState } from '@/types/Product.types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById } from "./productsAPI";

export const getProductsByType = createAsyncThunk(
	"@@products/getByType",
	async (type: string, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchAllProducts(type);
			return fulfillWithValue(response);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getProductById = createAsyncThunk(
	"@@products/getById",
	async (id: number, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchProductById(id);
			return fulfillWithValue(response);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IProductsState = {
	status: "idle",
	error: "",
	products: [],
	product: {
		id: 0,
		title: "",
		description: "",
		picture: "",
		product_type: "",
	},
};

const productsSlice = createSlice({
	name: "@@products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsByType.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProductsByType.fulfilled, (state, action) => {
				state.status = "success";
				state.products = action.payload;
			})
			.addCase(getProductById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.status = "success";
				state.product = action.payload;
			});
	},
});

export const productsReducer = productsSlice.reducer;
