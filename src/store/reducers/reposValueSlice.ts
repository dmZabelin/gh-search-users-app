import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let reposValFromStorage = localStorage.getItem('reposVal');
if (reposValFromStorage !== null) {
	reposValFromStorage = JSON.parse(reposValFromStorage);
}

export interface IInputState {
	value: string;
	name: string;
}
const initialState = (
	!reposValFromStorage ? { value: '', name: '' } : reposValFromStorage
) as IInputState;

const reposValueSlice = createSlice({
	name: 'SET_INPUT_VALUE',
	initialState,
	reducers: {
		reposValue(state, action: PayloadAction<IInputState>) {
			state.value = action.payload.value;
			state.name = action.payload.name;
		},
	},
});

export const { reposValue } = reposValueSlice.actions;
export default reposValueSlice.reducer;
