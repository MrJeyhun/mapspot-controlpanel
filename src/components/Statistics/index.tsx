import React from 'react';
import './index.scss';
import Block from 'shared/components/Block';
import Line from './Line';

//FIXME: render with ReactLazy??

const StatisticsPage = () => {
    return (
        <Block className="statistics">
            <Block className="bump-container">
                <Line />
            </Block>
        </Block>
    );
};

export default StatisticsPage;
