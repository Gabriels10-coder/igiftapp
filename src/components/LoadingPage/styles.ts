import styled from 'styled-components/native';
import AnimatedLottieView from 'lottie-react-native';

export const Loading = styled(AnimatedLottieView)`
    height: 100%;
    width: 100%;
    position: absolute;
`;
export const Text = styled.Text`
    font-size: 20px;
    margin-top: 300px;
    color: #000;
`;
export const ContainerLottie = styled.SafeAreaView`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
`;
