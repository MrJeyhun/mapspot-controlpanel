import React, { ReactNode, FC, HTMLAttributes } from 'react';

import './index.scss';

export enum EButtonType {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button',
}

interface IProps extends HTMLAttributes<HTMLElement> {
    type?: EButtonType;
    className?: string;
    id?: string;
    children?: ReactNode | string;
    disabled?: boolean;
}

const Button: FC<IProps> = ({ type = EButtonType.BUTTON, disabled = false, children, className, ...others }) => {
    return (
        <button {...{ type, disabled, ...others }} className={className}>
            {children}
        </button>
    );
};

export default Button;
