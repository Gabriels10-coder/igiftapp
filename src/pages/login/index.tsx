import React, {useState} from 'react';
import Input from '../../components/input';
import * as Styled from './styles';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../redux/config/hooks';
import handleAuthRequestThunk from '../../redux/modules/auth/thunk.store';
import {getDeviceName} from 'react-native-device-info';
import Layout from '../../components/layout/estrutura';
import {ShowToast} from '../../utils/toast';
import {setError} from '../../redux/modules/auth/index.store';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {error} = useAppSelector(state => state.auth);

    const Auth = async () => {
        if (!email || !password) {
            dispatch(setError(true));
            return ShowToast(
                'error',
                'Atenção',
                'Preencha os campos obrigatórios',
            );
        }
        dispatch(
            handleAuthRequestThunk({
                email,
                password,
                device_name: await getDeviceName(),
            }),
        );
    };
    return (
        <Layout>
            <Styled.Container>
                <Styled.ContainerInputs>
                    <Input
                        onChangeText={texto => setEmail(texto)}
                        value={email}
                        label="Email"
                        error={error}
                    />
                    <Input
                        value={password}
                        onChangeText={texto => setPassword(texto)}
                        label="Senha"
                        error={error}
                    />
                </Styled.ContainerInputs>
                <Styled.ContainerButton>
                    <Button text="Entrar" size="large" onPress={Auth} />
                </Styled.ContainerButton>
            </Styled.Container>
        </Layout>
    );
};

export default Login;
