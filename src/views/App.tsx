import React from 'react';

import Block from 'shared/components/Block';
import Container from 'shared/components/Container';
import Sidebar from 'components/Sidebar';
import { CenterRoutes, RightRoutes } from 'routes';

const App = () => {
    return (
        <Block className="grid-container">
            <Block className="app">
                <Block className="left-side">
                    <Container>
                        <Sidebar />
                    </Container>
                </Block>
                <Block className="center">
                    <Container>{CenterRoutes}</Container>
                </Block>
                <Block className="right-side">
                    <Container>{RightRoutes}</Container>
                </Block>
            </Block>
        </Block>
    );
};

export default App;
