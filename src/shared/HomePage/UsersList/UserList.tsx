import React from 'react';
import styles from './userlist.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { TInitialState, TItem } from '../../../store/reducers/usersDataSlice';
import { UserCard } from './UserCard';

export function UserList() {
	const { items, loading, error } = useSelector<RootState, TInitialState>(state => state.userData);
	if (loading) return <h2>Loading ...</h2>;
	if (error) return <h2>Error: {error}</h2>;

	return (
		<ul className={styles.cardList}>
			{items.map((obj: TItem) => (
				<UserCard
					key={obj.id}
					login={obj.login}
					name={obj.name}
					repo={obj.public_repos}
					avatar={obj.avatar_url}
				/>
			))}
		</ul>
	);
}
