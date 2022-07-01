import React from 'react';
import styles from './repoitem.module.scss';

interface IRepoItem {
	name: string;
	stars: number;
	forks: number;
	url: string;
}

export function RepoItem({ name, url, forks, stars }: IRepoItem) {
	return (
		<li className={styles.repoItem}>
			<a href={url}>
				<h3>{name}</h3>
			</a>
			<div>
				<p>{forks} Forks</p>
				<p>{stars} Stars</p>
			</div>
		</li>
	);
}
