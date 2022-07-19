import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import {clearToken} from '../../../redux/modules/auth/index.store';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text>test</Text>
            <Button text="Sair" onPress={() => dispatch(clearToken())} />
        </View>
    );
};

export default Dashboard;
