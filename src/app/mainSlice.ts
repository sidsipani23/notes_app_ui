import { createSlice } from '@reduxjs/toolkit';
export const mainSlice = createSlice({
	name: 'main',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {},
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
