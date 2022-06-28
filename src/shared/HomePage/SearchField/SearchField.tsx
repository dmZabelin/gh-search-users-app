import React from 'react';
import styles from './searchfield.module.scss';
import { clearUsers, fetchUsersData } from '../../../store/reducers/usersDataSlice';
import { useAppDispatch } from '../../../store';
import { IInputState, inputValue } from '../../../store/reducers/inputValueSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

export function SearchField() {
	const dispatch = useAppDispatch();
	const { value } = useSelector<RootState, IInputState>(state => state.inputValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		dispatch(inputValue(text));
		localStorage.setItem('val', text);
		if (text.trim().length) {
			dispatch(fetchUsersData(e.target.value));
		} else {
			dispatch(clearUsers());
			localStorage.clear();
		}
	};

	return (
		<input
			type="text"
			name="text"
			placeholder={'Type text here!'}
			className={styles.searchInput}
			onChange={handleChange}
			value={value}
		/>
	);
}
