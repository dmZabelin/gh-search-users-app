import React from 'react';
import { Layout } from '../Layout';
import { Header } from '../Header';
import { UserInfoBlock } from './UserInfoBlock';
import { ReposList } from './ReposList';

export function SinglePage() {
	const pathname = window.location.pathname;
	const login = pathname.split('/')[2];
	return (
		<Layout>
			<Header />
			<UserInfoBlock login={login} />
			<ReposList />
		</Layout>
	);
}
