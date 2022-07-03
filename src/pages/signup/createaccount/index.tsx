import React from 'react';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutesParams} from '../../../@types/customTypes';
import * as Styled from './styles';

const CreateAccount: React.FC = () => {
    const {navigate} = useNavigation<StackNavigationProp<RoutesParams>>();
    return (
        <>
            <Styled.ContainerLottie>
                <Styled.Gift
                    speed={2}
                    autoPlay
                    source={{
                        uri: 'https://assets5.lottiefiles.com/datafiles/Cfz65R9T4YbXUIA/data.json',
                    }}
                />
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
                    />
                </Styled.ContainerButtons>
                <Styled.ContainerButtons>
                    <Button
                        onPress={() => navigate('ChoiceUser')}
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
