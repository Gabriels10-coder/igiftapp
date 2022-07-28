import styled from 'styled-components/native';
import AnimatedLottieView from 'lottie-react-native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

export const ContainerLottie = styled.SafeAreaView`
    display: flex;
    align-items: center;
    height: 70%;
`;
export const Gift = styled(AnimatedLottieView)`
    width: 500px;
    margin-left: 10px;
`;
export const ContainerText = styled.SafeAreaView`
    display: flex;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 17px;
    color: #000;
    font-family: 'Karla ExtraBold';
`;

export const ContainerDesc = styled.SafeAreaView`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
export const Desc = styled.Text`
    font-size: 16px;
    color: #808080;
    font-family: 'Karla Medium';
`;
export const ContainerButtons = styled.SafeAreaView`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const ContainerMasterButton = styled.SafeAreaView`
    flex: 3;
    justify-content: flex-end;
    margin-bottom: 50px;
`;
