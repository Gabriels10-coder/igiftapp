import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../components/Button';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'blue',
                    },
                }}>
                <Tab.Screen name="Home" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
