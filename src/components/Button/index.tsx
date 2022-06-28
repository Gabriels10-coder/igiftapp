import React from 'react';
import {Button, View, Text} from 'react-native';
import {REACT_APP_API} from '@env';

const Login: React.FC = () => {
    return (
        <View>
            <Button title="test" />
            <Text>{REACT_APP_API}</Text>
        </View>
    );
};

export default Login;
