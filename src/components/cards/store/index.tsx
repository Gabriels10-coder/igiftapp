import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import logo from '../../../assets/images/riachuelo.png';
import * as Styled from './styles';

const StoreCard: React.FC = () => {
    return (
        <Styled.CustomCard>
            <Styled.ContainerAvatar>
                <Avatar.Image
                    size={50}
                    source={logo}
                    style={{backgroundColor: '#fff'}}
                />
            </Styled.ContainerAvatar>
            <Styled.ContainerContent>
                <Styled.TitleEstablishment>Netshoes</Styled.TitleEstablishment>
                <Styled.ContainerDescription>
                    <Styled.ContainerAvaliation>
                        <Icon name="star" size={15} color="#ffbf00" />
                        <Styled.NumberAvaliation>4,5</Styled.NumberAvaliation>
                    </Styled.ContainerAvaliation>
                    <Styled.ContainerCategoryRange>
                        <Styled.CategoryRange> - Sapato</Styled.CategoryRange>
                        <Styled.CategoryRange> - 3,4 km</Styled.CategoryRange>
                    </Styled.ContainerCategoryRange>
                </Styled.ContainerDescription>
            </Styled.ContainerContent>
            <Styled.ContainerIcon>
                <Icon name="chevron-thin-right" size={20} color="#000" />
            </Styled.ContainerIcon>
        </Styled.CustomCard>
    );
};

export default StoreCard;
