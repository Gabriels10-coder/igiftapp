import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../pages/signup/createaccount';
import Loading from '../components/LoadingPage';
import ChoiceUser from '../pages/signup/selectoption';

const SignUp: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="CreateAccount"
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
