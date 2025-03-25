import { ICalculator, ICalculatorState } from '@/types/Calculator.types';
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
	total_cost: 0,
	details: {
		wall_panel_cost: 0,
		roof_panel_cost: 0,
		insulation_cost: 0,
		basePrices: {
			wall: 0,
			roof: 0,
		},
		multipliers: {
			metalFactor: 0,
			wallPanelWidthFactor: 0,
			wallThicknessFactor: 0,
			roofThicknessFactor: 0,
			colorMultiplier: 0,
		},
		vat_included: false,
	}
};

export const calculatorSlice = createSlice({
	name: "@@calculator",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(calculateApi.fulfilled, (state, action) => {
				state.status = "success";
				state.total_cost = action.payload.total_cost;
				state.details = action.payload.details;
			})
			.addCase(calculateApi.pending, (state) => {
				state.status = "loading";
			})
			.addCase(calculateApi.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload as string;
			});
	},
});

export const calculatorReducer = calculatorSlice.reducer;
