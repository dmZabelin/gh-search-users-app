import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './reducers/usersDataSlice';
import inputValueReducer from './reducers/inputValueSlice';
import reposValueReducer from './reducers/reposValueSlice';
import reposDataReducer from './reducers/reposDataSlice';

const rootReducer = combineReducers({
	userData: userDataReducer,
	reposData: reposDataReducer,
	inputValue: inputValueReducer,
	reposValue: reposValueReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
