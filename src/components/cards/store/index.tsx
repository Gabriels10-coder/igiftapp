import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';

const StoreCard: React.FC = () => {
    return (
        <View>
            <Avatar.Image
                source={{
                    uri: 'https://files.sunoresearch.com.br/n/uploads/2021/04/8106c24d-riachuelo-800x450.jpg',
                }}
            />
        </View>
    );
};

export default StoreCard;
