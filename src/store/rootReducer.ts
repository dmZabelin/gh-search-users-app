import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './reducers/usersDataSlice';
import inputValueReducer from './reducers/inputValueSlice';
import reposDataReducer from './reducers/reposDataSlice';

const rootReducer = combineReducers({
	userData: userDataReducer,
	reposData: reposDataReducer,
	inputValue: inputValueReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
