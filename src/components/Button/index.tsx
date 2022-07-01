import React from 'react';
import {Button, View, Text} from 'react-native';
import {REACT_APP_API} from '@env';
import {useDispatch} from 'react-redux';
import handleAuthRequestThunk from '../../redux/modules/auth/thunk.store';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    function Test() {
        dispatch(handleAuthRequestThunk());
    }
    return (
        <View>
            <Button title="test" onPress={Test} />
            <Text>{REACT_APP_API}</Text>
        </View>
    );
};

export default Login;
