import React from 'react';
import { Header } from '../Header';
import { SearchField } from './SearchField';
import { Layout } from '../Layout';
import { UserList } from './UsersList';

export function HomePage() {
	return (
		<Layout>
			<Header />
			<SearchField />
			<UserList />
		</Layout>
	);
}
