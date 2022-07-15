import {ShowToast} from './../../../utils/toast';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../services/api';
import {IAuthResponse, IAuthLoginRequest} from './types.store';
import {AxiosError} from 'axios';
import {setLoading} from '../utils/index.store';

const handleAuthRequestThunk = createAsyncThunk(
    '/auth',
    async (request: IAuthLoginRequest, {rejectWithValue, dispatch}) => {
        dispatch(setLoading(true));
        try {
            const response = await api.post<IAuthResponse>('/auth', request);
            console.log(response.data);
            dispatch(setLoading(false));
            ShowToast('success', 'Sucesso', 'Logado');
            return response.data.token;
        } catch (error) {
            const err = error as Error;
            const AxiosErr = err as AxiosError;
            console.log(AxiosErr.response?.data);
            ShowToast('error', 'Atenção', 'Verifique suas credenciais');
            dispatch(setLoading(false));
            return rejectWithValue(AxiosErr.response?.data);
        }
    },
);

export default handleAuthRequestThunk;
