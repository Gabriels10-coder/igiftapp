import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../pages/signup/createaccount';
import SignUp from './signup';
import LoginRoute from './login';
import Logged from './logged';
import {useAppSelector} from '../redux/config/hooks';

const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    const {token} = useAppSelector(state => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="CreateAccount"
                screenOptions={{
                    headerShown: false,
                }}>
                {!token ? (
                    <>
                        <Stack.Screen
                            name="CreateAccount"
                            component={CreateAccount}
                        />
                        <Stack.Screen
                            name="LoginRoute"
                            component={LoginRoute}
                        />
                        <Stack.Screen name="Signup" component={SignUp} />
                    </>
                ) : (
                    <Stack.Screen name="LoggedRoutes" component={Logged} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Routes;
