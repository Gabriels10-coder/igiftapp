import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './signup';
import Logged from './logged';

const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Logged"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Logged" component={Logged} />
                <Stack.Screen name="Signup" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;
