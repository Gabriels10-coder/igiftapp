import React from 'react';
import * as Styled from './styles';

export type ButtonVariants = 'contained' | 'outlined';
export type SizeVariants = 'small' | 'medium' | 'large';
interface IPropsButton {
    text: string;
    type?: ButtonVariants;
    onPress?: () => void;
    size?: SizeVariants;
}

const Button: React.FC<IPropsButton> = ({
    text,
    onPress,
    size = 'medium',
    type = 'contained',
}) => {
    return (
        <Styled.ContainerButton size={size} type={type} onPress={onPress}>
            <Styled.Text type={type}>{text}</Styled.Text>
        </Styled.ContainerButton>
    );
};

export default Button;
