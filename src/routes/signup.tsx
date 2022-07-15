import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChoiceUser from '../pages/signup/selectoption';

const SignUp: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    color: '#000',
                },
                headerTintColor: '#1e88e5',
            }}
            initialRouteName="ChoiceUser">
            <Stack.Screen
                name="ChoiceUser"
                options={{title: 'Escolha do usuário'}}
                component={ChoiceUser}
            />
        </Stack.Navigator>
    );
};

export default SignUp;
