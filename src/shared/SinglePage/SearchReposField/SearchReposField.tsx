import React, { useEffect, useState } from 'react';
import styles from './searchReposfield.module.scss';
import { useAppDispatch } from '../../../store';
import { fetchReposData } from '../../../store/reducers/reposDataSlice';
import { IInputState, reposValue } from '../../../store/reducers/reposValueSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

interface ISearchReposField {
	login: string;
}

export function SearchReposField({ login }: ISearchReposField) {
	const [inputVal, setInputVal] = useState('');
	const dispatch = useAppDispatch();
	const { value, name } = useSelector<RootState, IInputState>(state => state.reposValue);

	useEffect(() => {
		if (name === login) {
			setInputVal(value);
			dispatch(fetchReposData({ userName: login, text: value }));
		} else {
			dispatch(fetchReposData({ userName: login, text: '' }));
		}
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(reposValue({ value: e.target.value, name: login }));
		localStorage.setItem('reposVal', JSON.stringify({ value: e.target.value, name: login }));
	};

	return (
		<input
			type="text"
			name="text"
			placeholder={'Type text here!'}
			className={styles.searchInput}
			onChange={handleChange}
			value={inputVal}
		/>
	);
}
