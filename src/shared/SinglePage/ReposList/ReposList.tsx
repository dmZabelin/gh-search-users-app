import React from 'react';
import styles from './reposlist.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { RepoItem } from './RepoItem';
import { TInitialState, TRepo } from '../../../store/reducers/reposDataSlice';

export function ReposList() {
	const { items, loading, error } = useSelector<RootState, TInitialState>(
		state => state.reposData
	);
	if (loading) return <h2>Loading ...</h2>;
	if (error) return <h2>Error: {error}</h2>;

	return (
		<ul className={styles.cardList}>
			{items.map((obj: TRepo) => (
				<RepoItem
					key={obj.node_id}
					name={obj.name}
					stars={obj.stargazers_count}
					forks={obj.forks_count}
					url={obj.svn_url}
				/>
			))}
		</ul>
	);
}
