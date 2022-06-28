import React from 'react';

interface IRepoItem {
	name: string;
	stars: number;
	forks: number;
	url: string;
}

export function RepoItem({ name, url }: IRepoItem) {
	return (
		<li>
			<a href={url}>{name}</a>
		</li>
	);
}
