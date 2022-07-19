import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../pages/logged/dashboard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Logged: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    color: '#1e88e5',
                    marginBottom: 5,
                    fontWeight: 'bold',
                    fontSize: 12,
                },
            }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Icon name="house" color="#1e88e5" size={28} />
                    ),
                }}
                name="Inicio"
                component={Dashboard}
            />
        </Tab.Navigator>
    );
};

export default Logged;
