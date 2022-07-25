import React from 'react';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Styled from './styles';

const CardChoice: React.FC = () => {
    return (
        <Card
            elevation={5}
            style={{width: '95%', height: 80, borderRadius: 15}}>
            <Card.Content>
                <Styled.ContainerCard>
                    <Icon name="user" color="#1e88e5" size={40} />
                    <Styled.TitleCard>Vendedor</Styled.TitleCard>
                </Styled.ContainerCard>
            </Card.Content>
        </Card>
    );
};

export default CardChoice;
