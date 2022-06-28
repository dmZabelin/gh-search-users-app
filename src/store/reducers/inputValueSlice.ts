import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputValFromStorage = localStorage.getItem('val');

export interface IInputState {
	value: string;
}

const initialState = { value: !inputValFromStorage ? '' : inputValFromStorage } as IInputState;

const inputValueSlice = createSlice({
	name: 'SET_INPUT_VALUE',
	initialState,
	reducers: {
		inputValue(state, action: PayloadAction<string>) {
			state.value = action.payload;
		},
	},
});

export const { inputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
