import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import * as Styled from './styles';

const StoreCard: React.FC = () => {
    return (
        <Styled.CustomCard>
            <Styled.ContainerAvatar>
                <Avatar.Image size={50} source={{uri: 'test'}} />
            </Styled.ContainerAvatar>
            <Styled.ContainerContent>
                <Styled.TitleEstablishment>Netshoes</Styled.TitleEstablishment>
                <Styled.ContainerAvaliation>
                    <Icon name="star" size={15} color="#ffbf00" />
                    <Styled.NumberAvaliation>4,5</Styled.NumberAvaliation>
                </Styled.ContainerAvaliation>
            </Styled.ContainerContent>
        </Styled.CustomCard>
    );
};

export default StoreCard;
