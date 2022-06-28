import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PER_PAGE_REPOS } from '../const';

let repoDataStorage = localStorage.getItem('repos');
if (repoDataStorage !== null) {
	repoDataStorage = JSON.parse(repoDataStorage);
}

export type TRepo = {
	name: string;
	node_id: string;
	stargazers_count: number;
	forks_count: number;
	svn_url: string;
};

export type TInitialState = {
	items: Array<any | TRepo>;
	loading: boolean;
	error: null | string;
};

const initialState = {
	items: !repoDataStorage ? [] : repoDataStorage,
	loading: false,
	error: null,
} as TInitialState;

export const fetchReposData = createAsyncThunk(
	'SET_REPOS_DATA/fetchReposData',
	async (userName: string, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://api.github.com/users/${userName}/repos?per_page=${PER_PAGE_REPOS}`
			);
			if (!response.ok) {
				throw new TypeError('Request error (users/{userName}/repos)!');
			}
			const data = await response.json();

			const repossData = data.map((item: TRepo) => {
				return {
					name: item.name,
					node_id: item.node_id,
					stargazers_count: item.stargazers_count,
					forks_count: item.forks_count,
					svn_url: item.svn_url,
				};
			});
			localStorage.setItem('repos', JSON.stringify(repossData));
			return repossData;
		} catch (error) {
			if (!(error instanceof TypeError)) {
				throw error;
			}
			return rejectWithValue(error.message);
		}
	}
);

const reposDataSlice = createSlice({
	name: 'SET_REPOS_DATA',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchReposData.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchReposData.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchReposData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

//export const { clearUsers } = reposDataSlice.actions;
export default reposDataSlice.reducer;
