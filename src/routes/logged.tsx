import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';

const Logged: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default Logged;
