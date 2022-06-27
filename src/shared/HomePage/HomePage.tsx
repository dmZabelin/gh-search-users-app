import React from 'react';
import { Header } from '../Header';
import { SearchField } from './SearchField';
import { Layout } from '../Layout';

export function HomePage() {
	return (
		<Layout>
			<Header />
			<SearchField />
		</Layout>
	);
}
