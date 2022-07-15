import React from 'react';
import gift from '../../assets/lottie/90020-gift.json';
import * as Styled from './styles';

const Loading: React.FC = () => {
    return (
        <>
            <Styled.ContainerLottie>
                <Styled.Loading autoSize speed={1.4} autoPlay source={gift} />
                <Styled.Text>Aguarde por favor...</Styled.Text>
            </Styled.ContainerLottie>
        </>
    );
};

export default Loading;
