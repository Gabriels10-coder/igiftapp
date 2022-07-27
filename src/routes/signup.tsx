import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChoiceUser from '../pages/signup/selectoption';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
    const Stack = createStackNavigator();
    const {goBack} = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                },
                headerLeft: () => (
                    <Icon
                        name="left"
                        color="#1e88e5"
                        size={25}
                        style={{marginLeft: 20}}
                        onPress={() => goBack()}
                    />
                ),
            }}
            initialRouteName="ChoiceUser">
            <Stack.Screen
                name="ChoiceUser"
                options={{title: ''}}
                component={ChoiceUser}
            />
        </Stack.Navigator>
    );
};

export default SignUp;
