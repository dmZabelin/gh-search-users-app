import React from 'react';
import styles from './usercard.module.scss';
import { Link } from 'react-router-dom';

interface IUserCard {
	avatar: string;
	name: string;
	repo: string;
	login: string;
}

export function UserCard({ avatar, name, repo, login }: IUserCard) {
	return (
		<li className={styles.userCard}>
			<Link to={`/user/${login}`} className={styles.userCardLink}>
				<div className={styles.userCardImg}>
					<img src={avatar} alt="User Avatar" />
				</div>
				<h3 className={styles.userCardTitle}>{name}</h3>
				<p className={styles.userCardRepo}>
					Repo: <span>{repo}</span>
				</p>
			</Link>
		</li>
	);
}
