import { ICalculator, ICalculatorState } from '@/types/Auth.types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCalculate } from './calculatorAPI';

export const calculateApi = createAsyncThunk(
	"@@calculator/calculate",
	async (data: ICalculator, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchCalculate(data);
			const json = await response.json();
			return fulfillWithValue(json);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: ICalculatorState = {
	status: "idle",
	error: "",
	total_cost: "",
};

export const calculatorSlice = createSlice({
	name: "@@calculator",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(calculateApi.fulfilled, (state) => {
				state.status = "success";
			})
			.addCase(calculateApi.pending, (state) => {
				state.status = "loading";
			});
	},
});

export const calculatorReducer = calculatorSlice.reducer;
