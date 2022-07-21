import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import {clearToken} from '../../../redux/modules/auth/index.store';

const User: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Button
                size="small"
                text="Sair"
                onPress={() => dispatch(clearToken())}
            />
        </View>
    );
};

export default User;
