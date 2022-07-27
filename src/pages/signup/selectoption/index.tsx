import React from 'react';
import CardChoice from '../../../components/cards/choice';
import {Divider} from 'react-native-paper';
import * as Styled from './styles';

const ChoiceUser: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.ContainerTitle>
                <Styled.Text>Usuário</Styled.Text>
                <Styled.Desc>
                    Escolha como você utilizará a plataforma
                </Styled.Desc>
            </Styled.ContainerTitle>
            <Styled.ContainerDivider>
                <Divider />
            </Styled.ContainerDivider>
            <Styled.ContainerCards>
                <CardChoice
                    icon="shopping-cart"
                    title="Cliente"
                    desc="Venha fazer suas compras;"
                />
                <CardChoice
                    icon="dollar-sign"
                    title="Vendedor"
                    desc="Venha vender com a gente."
                />
                <CardChoice
                    icon="truck"
                    title="Entregador"
                    desc="Venha trabalhar com a gente."
                />
            </Styled.ContainerCards>
        </Styled.Container>
    );
};

export default ChoiceUser;
