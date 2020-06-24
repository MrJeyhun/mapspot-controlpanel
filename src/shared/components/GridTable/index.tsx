import React, { FC } from 'react';
import './index.scss';
//prettier-ignore

interface GridProps  {
    headers : any,
    body: any,
    columnSize: string,
    className?: string
}

const Grid: FC<GridProps> = ({ headers, body, columnSize, className }) => {
    return (
        <div className={`grid-table  ${columnSize} ${className ? className : ''}`}>
            {headers}
            {body}
        </div>
    );
};

export default Grid;
