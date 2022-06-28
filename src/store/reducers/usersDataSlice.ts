import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PER_PAGE } from '../const';

let itemsDataStorage = localStorage.getItem('users');
if (itemsDataStorage !== null) {
	itemsDataStorage = JSON.parse(itemsDataStorage);
}

export type TItem = {
	login: string;
	name: string;
	id: string;
	avatar_url: string;
	bio: string;
	email: string;
	location: string;
	public_repos: string;
	followers: string;
	following: string;
	created_at: string;
};

export type TInitialState = {
	items: Array<any | TItem>;
	loading: boolean;
	error: null | string;
};

const initialState = {
	items: !itemsDataStorage ? [] : itemsDataStorage,
	loading: false,
	error: null,
} as TInitialState;

export const fetchUsersData = createAsyncThunk(
	'SET_USERS_DATA/fetchUsersData',
	async (text: string, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://api.github.com/search/users?q=${text}&per_page=${PER_PAGE}`
			);
			if (!response.ok) {
				throw new TypeError('Request error (/search/users)!');
			}
			const data = await response.json();

			const usersData = await Promise.all(
				data.items.map(async (item: TItem) => {
					const response = await fetch(`https://api.github.com/users/${item.login}`);
					if (!response.ok) throw new TypeError('Request error (/users/{username})!');
					const data = await response.json();
					return {
						login: data.login,
						name: data.name,
						id: data.node_id,
						avatar_url: data.avatar_url,
						bio: data.bio,
						email: data.email,
						location: data.location,
						public_repos: data.public_repos,
						followers: data.followers,
						following: data.following,
						created_at: data.created_at,
					};
				})
			);
			localStorage.setItem('users', JSON.stringify(usersData));
			return usersData;
		} catch (error) {
			if (!(error instanceof TypeError)) {
				throw error;
			}
			return rejectWithValue(error.message);
		}
	}
);

const userDataSlice = createSlice({
	name: 'SET_USERS_DATA',
	initialState,
	reducers: {
		clearUsers(state) {
			state.items = [];
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsersData.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsersData.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchUsersData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { clearUsers } = userDataSlice.actions;
export default userDataSlice.reducer;
