import styled from 'styled-components/native';
import {SizeVariants, ButtonVariants} from '.';

export const ContainerButton = styled.TouchableOpacity<{
    size?: SizeVariants;
    type?: ButtonVariants;
}>`
    background-color: ${({type}) => {
        switch (type) {
            case 'contained':
                return '#1e88e5';
            case 'outlined':
                return '#ffff';
        }
    }};
    width: ${({size}) => {
        switch (size) {
            case 'small':
                return '30%';
            case 'medium':
                return '50%';
            case 'large':
                return '90%';
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 15px;
    border: ${({type}) => {
        switch (type) {
            case 'contained':
                return 'none';
            case 'outlined':
                return '1px solid #808080';
        }
    }};
    elevation: 3;
`;

export const Text = styled.Text<{
    type?: ButtonVariants;
}>`
    color: ${({type}) => {
        switch (type) {
            case 'contained':
                return '#ffff';
            case 'outlined':
                return '#000';
        }
    }};
    font-weight: bold;
    font-size: 18px;
`;
