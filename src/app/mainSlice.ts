import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
export const mainSlice = createSlice({
	name: 'main',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {},
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
