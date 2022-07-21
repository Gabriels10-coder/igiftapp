import React from 'react';
import {ScrollView} from 'react-native';
import StoreCard from '../../../components/cards/store';
import * as Styled from './styles';

const Dashboard: React.FC = () => {
    return (
        <ScrollView>
            <Styled.ContainerAdress>
                <Styled.Adress>Escolha seu endereço de entrega</Styled.Adress>
            </Styled.ContainerAdress>
            <Styled.ConteinerTitleStore>
                <Styled.TitleStore>Lojas</Styled.TitleStore>
            </Styled.ConteinerTitleStore>
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
        </ScrollView>
    );
};

export default Dashboard;
