import React from 'react';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutesParams} from '../../../@types/customTypes';
import tree from '../../../assets/lottie/tree.json';
import * as Styled from './styles';

const CreateAccount: React.FC = () => {
    const {navigate} = useNavigation<StackNavigationProp<RoutesParams>>();
    return (
        <>
            <Styled.ContainerLottie>
                <Styled.Gift speed={2} autoPlay source={tree} />
            </Styled.ContainerLottie>
            <Styled.ContainerMasterButton>
                <Styled.ContainerText>
                    <Styled.Title>Compre seu presente</Styled.Title>
                    <Styled.Title>aqui!</Styled.Title>
                </Styled.ContainerText>
                <Styled.ContainerDesc>
                    <Styled.Desc>Como deseja prosseguir?</Styled.Desc>
                </Styled.ContainerDesc>
                <Styled.ContainerButtons>
                    <Button
                        text="Já tenho uma conta"
                        type="contained"
                        size="large"
                        onPress={() => navigate('LoginRoute')}
                    />
                </Styled.ContainerButtons>
                <Styled.ContainerButtons>
                    <Button
                        onPress={() => navigate('Signup')}
                        text="Crie a sua conta"
                        type="outlined"
                        size="large"
                    />
                </Styled.ContainerButtons>
            </Styled.ContainerMasterButton>
        </>
    );
};

export default CreateAccount;
