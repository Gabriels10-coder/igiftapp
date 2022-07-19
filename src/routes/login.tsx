import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';

const LoginRoute: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    color: '#000',
                },
                headerTintColor: '#1e88e5',
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default LoginRoute;
