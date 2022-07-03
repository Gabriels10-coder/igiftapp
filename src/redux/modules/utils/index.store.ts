import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UtilsReduxState} from './types.store';

const initialState: UtilsReduxState = {
    loading: false,
};

const store = createSlice({
    initialState,
    name: 'utils',
    reducers: {
        setLoading: (
            state: UtilsReduxState,
            action: PayloadAction<boolean>,
        ) => {
            state.loading = action.payload;
        },
    },
});

export const {setLoading} = store.actions;

export default store.reducer;
