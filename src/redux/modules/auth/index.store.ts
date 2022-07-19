import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState} from './types.store';
import handleAuthRequestThunk from './thunk.store';

const initialState: IAuthState = {
    token: undefined,
    loading: false,
    error: false,
};

const store = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        clearToken: (state: IAuthState) => {
            state.token = undefined;
            state.loading = false;
        },
        setError: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(handleAuthRequestThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload;
            state.error = false;
        });
        builder.addCase(handleAuthRequestThunk.pending, state => {
            state.loading = true;
        });
        builder.addCase(handleAuthRequestThunk.rejected, state => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const {clearToken, setError} = store.actions;
export default store.reducer;
