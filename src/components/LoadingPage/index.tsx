import React from 'react';
import * as Styled from './styles';

const Loading: React.FC = () => {
    return (
        <>
            <Styled.ContainerLottie>
                <Styled.Loading
                    autoSize
                    speed={0.7}
                    autoPlay
                    source={{
                        uri: 'https://assets4.lottiefiles.com/packages/lf20_jzmdkj5n.json',
                    }}
                />
                <Styled.Text>Aguarde por favor...</Styled.Text>
            </Styled.ContainerLottie>
        </>
    );
};

export default Loading;
