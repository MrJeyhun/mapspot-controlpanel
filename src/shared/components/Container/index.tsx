import React, { FC, ReactChildren, ReactElement } from 'react';
import Block from 'shared/components/Block';

import './index.scss';

interface IProps {
    children: ReactChildren | ReactElement;
    className?: string;
}

const Container: FC<IProps> = ({ children, className }) => {
    return <Block className={`left-center-container ${className ? className : ''}`}> {children}</Block>;
};

export default Container;
