import React from 'react';
import styles from './notfound.module.scss';
import { Link } from 'react-router-dom';

export function NotFound() {
	return (
		<div className={styles.notFound}>
			<span>404</span>
			<p>
				This page not found! Enter{' '}
				<Link to={'/'} className={styles.backLink}>
					{' '}
					here{' '}
				</Link>{' '}
				to back main page!
			</p>
		</div>
	);
}
