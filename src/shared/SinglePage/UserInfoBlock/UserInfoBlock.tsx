import React from 'react';
import styles from './userinfoblock.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { TInitialState } from '../../../store/reducers/usersDataSlice';

interface IUserInfoProps {
	login: string;
}

export function UserInfoBlock({ login }: IUserInfoProps) {
	const { items } = useSelector<RootState, TInitialState>(state => state.userData);
	const userData = items.filter(el => el.login === login)[0];

	return (
		<div className={styles.userItem}>
			<div className={styles.userItemWrap}>
				<div className={styles.userItemAvatar}>
					<img src={userData.avatar_url} alt="User Avatar" />
				</div>
				<div className={styles.userItemInfo}>
					<h1>{userData.name}</h1>
					{userData.email && (
						<p>
							E-mail: <span>{userData.email}</span>
						</p>
					)}
					{userData.location && (
						<p>
							Location: <span>{userData.location}</span>
						</p>
					)}
					{userData.created_at && (
						<p>
							Join Date: <span>{userData.created_at.split('T')[0]}</span>
						</p>
					)}
					<p>
						<span>{userData.followers}</span> followers
					</p>
					<p>
						Following: <span>{userData.following}</span>
					</p>
				</div>
			</div>
			{userData.bio && <div className={styles.userItemBio}>{userData.bio}</div>}
		</div>
	);
}
