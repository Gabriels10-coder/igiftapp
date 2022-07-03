import React from 'react';
import CardChoice from '../../../components/cardchoice';
import * as Styled from './styles';

const ChoiceUser: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Text>Como você deseja utilizar ?</Styled.Text>
            <CardChoice />
        </Styled.Container>
    );
};

export default ChoiceUser;
