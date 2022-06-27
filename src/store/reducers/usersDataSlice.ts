import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PER_PAGE } from '../const';

type TItem = {
	login: string;
};

/*type TUserData = {
	name: string;
	avatar_url: string;
	bio: string;
	email: string;
	location: string;
	public_repos: string;
	followers: string;
	following: string;
	created_at: string;
};*/

type TInitialState = {
	items: Array<TItem>;
	status: null | string;
	error: null | string;
};

const initialState = {
	items: [],
	status: null,
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

			return await Promise.all(
				data.items.map(async (item: TItem) => {
					const response = await fetch(
						`https://api.github.com/users/${item.login}`
					);
					if (!response.ok)
						throw new TypeError('Request error (/users/{username})!');
					const data = await response.json();
					return {
						name: data.name,
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
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersData.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchUsersData.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.items = action.payload;
			})
			.addCase(fetchUsersData.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.payload as string;
			});
	},
});

export default userDataSlice.reducer;
