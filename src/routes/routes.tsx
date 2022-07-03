import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './signup';

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <SignUp />
        </NavigationContainer>
    );
};
export default Routes;
