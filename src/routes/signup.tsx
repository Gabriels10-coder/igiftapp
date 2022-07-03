import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../pages/signup/createaccount';
import Loading from '../components/LoadingPage';
import ChoiceUser from '../pages/signup/selectoption';

const Stack = createStackNavigator();

const SignUp: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ChoiceUser" component={ChoiceUser} />
            <Stack.Screen name="LoadingPage" component={Loading} />
        </Stack.Navigator>
    );
};

export default SignUp;
