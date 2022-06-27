import React, { useState } from 'react';
import styles from './searchfield.module.scss';
import { useDispatch } from 'react-redux';
import { fetchUsersData } from '../../../store/reducers/usersDataSlice';
import { AppDispatch } from '../../../store';

export function SearchField() {
	const dispatch = useDispatch<AppDispatch>();
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		dispatch(fetchUsersData(e.target.value));
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
