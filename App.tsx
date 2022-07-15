import React from 'react';
import Routes from './src/routes/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/config/store';
import Toast from 'react-native-toast-message';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
                <Toast />
            </PersistGate>
        </Provider>
    );
};

export default App;
