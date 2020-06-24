import React, { FC } from 'react';

import './index.scss';
import Container from 'shared/components/Container';

interface IProps {}

const Loading: FC<IProps> = () => {
    return (
        <Container className="center">
            <div className="lib-loader"></div>
        </Container>
    );
};

export default Loading;
