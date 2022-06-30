import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../services/api';
import {IAuthLoginRequest, IAuthResponse} from './types.store';
import {AxiosError} from 'axios';

const handleAuthRequestThunk = createAsyncThunk<
    IAuthResponse,
    IAuthLoginRequest
>('/auth', async (request, {rejectWithValue}) => {
    try {
        const response = await api.post<IAuthResponse>('/auth', request);
        console.log(response.data);
        return response.data;
    } catch (error) {
        const err = error as Error;
        const AxiosErr = err as AxiosError;
        console.log(AxiosErr.response?.data);
        return rejectWithValue(AxiosErr.response?.data);
    }
});

export default handleAuthRequestThunk;
