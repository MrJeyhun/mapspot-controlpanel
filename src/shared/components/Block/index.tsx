import React, { ReactNode, FC, ReactNodeArray } from 'react';

interface IProps {
    children: ReactNode | ReactNodeArray;
    className?: string;
    onClick?: (e: any) => void;
}

const Block: FC<IProps> = ({ children, className, onClick }) => {
    return <div {...{ className, onClick }}>{children}</div>;
};

export default Block;
