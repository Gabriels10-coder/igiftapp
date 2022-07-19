import {ShowToast} from './../../../utils/toast';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../services/api';
import {IAuthResponse, IAuthLoginRequest} from './types.store';
import {AxiosError} from 'axios';
import {setLoading} from '../utils/index.store';
import {setError} from './index.store';

const handleAuthRequestThunk = createAsyncThunk(
    '/auth',
    async (request: IAuthLoginRequest, {rejectWithValue, dispatch}) => {
        dispatch(setLoading(true));
        try {
            const response = await api.post<IAuthResponse>('/auth', request);
            dispatch(setLoading(false));
            return response.data.token;
        } catch (error) {
            const err = error as Error;
            const AxiosErr = err as AxiosError;
            console.log(AxiosErr.response?.data);
            setTimeout(() => dispatch(setError(false)), 4000);
            ShowToast('error', 'Atenção', 'Verifique suas credenciais');
            dispatch(setLoading(false));
            return rejectWithValue(AxiosErr.response?.data);
        }
    },
);

export default handleAuthRequestThunk;
