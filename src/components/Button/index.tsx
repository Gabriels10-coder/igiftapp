import React from 'react';
import {Button, View, Text} from 'react-native';
import {REACT_APP_API} from '@env';
import {api} from '../../services/api';

const Login: React.FC = () => {
    const HandleTest = async () => {
        const response = await api.get('/');
        console.log(response.data);
    };
    return (
        <View>
            <Button title="test" onPress={HandleTest} />
            <Text>{REACT_APP_API}</Text>
        </View>
    );
};

export default Login;
