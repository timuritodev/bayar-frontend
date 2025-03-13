import { IWaterAccState } from '@/types/WaterAcc.types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllWater_accessory } from './water_accessoryAPI';

export const getWater_accessoryApi = createAsyncThunk(
	"@@water_accessory/get",
	async (__, { fulfillWithValue, rejectWithValue }) => {
		try {
			const response = await fetchAllWater_accessory();
			return fulfillWithValue(response);
		} catch (error: unknown) {
			return rejectWithValue(error);
		}
	}
);

const initialState: IWaterAccState = {
	status: "idle",
	error: "",
	products: [
		{
			id: 0,
			title: "",
			description: "",
			h_picture: "",
		},
	],
};

export const water_accessorySlice = createSlice({
	name: "@@water_accessory",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getWater_accessoryApi.fulfilled, (state, action) => {
				state.status = "success";
				state.products = action.payload;
			})
			.addCase(getWater_accessoryApi.pending, (state) => {
				state.status = "loading";
			});
	},
});

export const water_accessoryReducer = water_accessorySlice.reducer;
