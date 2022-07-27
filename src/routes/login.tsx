import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/login';
import {useAppSelector} from '../redux/config/hooks';

const LoginRoute: React.FC = () => {
    const Stack = createStackNavigator();
    const {loading} = useAppSelector(state => state.utils);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                },
                headerTitleStyle: {
                    color: '#000',
                },
                headerTintColor: '#1e88e5',
                headerShown: loading ? false : true,
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default LoginRoute;
