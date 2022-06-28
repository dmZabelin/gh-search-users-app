import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: (text?: string) => AppDispatch = useDispatch;

export default store;
