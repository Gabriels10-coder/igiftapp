import {persistStore, persistReducer, createTransform} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import combinedReducers from './combinedReducers';

const blackListKeys = createTransform(
    null,

    (state: any) => {
        const newState = state;
        newState.showSpinner = false;
        newState.loading = false;
        return newState;
    },
    {
        whitelist: ['config'],
    },
);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [blackListKeys],
    whitelist: ['config'],
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: {
                ignoredPaths: ['config', 'transferFlow'],
            },
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export {store, persistor};
