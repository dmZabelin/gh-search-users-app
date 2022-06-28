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
		<div className={styles.userInfo}>
			<div className={styles.userInfoAvatar}>
				<img src={userData.avatar_url} alt="User Avatar" />
			</div>
			<div>
				<h1>{userData.name}</h1>
				{userData.email && <p>{userData.email}</p>}
				{userData.location && <p>{userData.location}</p>}
				{userData.created_at && <p>{userData.created_at.split('T')[0]}</p>}
				<p>{userData.followers} followers</p>
				<p>following: {userData.following}</p>
			</div>
		</div>
	);
}
