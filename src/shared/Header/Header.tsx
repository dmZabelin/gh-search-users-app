import React from 'react';
import styles from './header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.headerTitle}>GitHub Searcher</h1>
		</header>
	);
}
