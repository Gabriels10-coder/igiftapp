import React from 'react';
import CardChoice from '../../../components/cards/choice';
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
