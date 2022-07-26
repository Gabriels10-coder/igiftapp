import React from 'react';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as Styled from './styles';
import {IPropsCardChoice} from './types';

const CardChoice: React.FC<IPropsCardChoice> = ({desc, icon, title}) => {
    return (
        <Card
            style={{width: '95%', height: 80, borderRadius: 15, marginTop: 10}}>
            <Card.Content>
                <Styled.ContainerCard>
                    <Styled.ContainerText>
                        <Styled.ContainerIcon>
                            <Icon name={icon} color="#1e88e5" size={36} />
                        </Styled.ContainerIcon>
                        <Styled.ContainerTitle>
                            <Styled.TitleCard>{title}</Styled.TitleCard>
                            <Styled.DescCard>{desc}</Styled.DescCard>
                        </Styled.ContainerTitle>
                    </Styled.ContainerText>
                    <Styled.ContainerButton>
                        <Icon name="chevron-right" color="#1e88e5" size={60} />
                    </Styled.ContainerButton>
                </Styled.ContainerCard>
            </Card.Content>
        </Card>
    );
};

export default CardChoice;
