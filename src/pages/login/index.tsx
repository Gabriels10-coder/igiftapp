import React from 'react';
import Input from '../../components/input';
import * as Styled from './styles';
import Button from '../../components/Button';

const Login: React.FC = () => {
    return (
        <>
            <Styled.ContainerInputs>
                <Input label="Email" />
                <Input label="Senha" />
            </Styled.ContainerInputs>
            <Styled.ContainerButton>
                <Button text="Entrar" size="large" />
            </Styled.ContainerButton>
        </>
    );
};

export default Login;
