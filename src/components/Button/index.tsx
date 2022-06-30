import React from 'react';
import {Button, View, Text} from 'react-native';
import {REACT_APP_API} from '@env';
import {useDispatch} from 'react-redux';
import handleAuthRequestThunk from '../../redux/modules/auth/thunk.store';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    function Test() {
        dispatch(
            handleAuthRequestThunk({
                email: 'gsm2015@outlook.com',
                password: '12345',
            }),
        );
    }
    return (
        <View>
            <Button title="test" onPress={Test} />
            <Text>{REACT_APP_API}</Text>
        </View>
    );
};

export default Login;
