import React, { ReactElement, useEffect, useRef, ReactNodeArray, ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

import Button from 'shared/components/Button';

import './index.scss';

interface IPortalProps {
    children?: ReactNodeArray | ReactNode;
}

export interface IModalAction {
    action(): void;
    title: string;
}

interface IProps extends IPortalProps {
    open: boolean;
    primaryAction?: IModalAction;
    secondaryAction?: IModalAction;
    title: string;
    className?: string;
}

const Portal = ({ children }: IPortalProps): ReactElement => {
    const modal = document?.createElement('div');
    modal.className = 'lib-modal';
    //FIXME: any
    useEffect((): any => {
        document?.body?.appendChild(modal);

        return () => document?.body?.removeChild(modal);
    }, [modal]);

    return createPortal(children, modal);
};

const Modal: FC<IProps> = ({
    children,
    open,
    secondaryAction,
    primaryAction,
    title,
    className = '',
}): ReactElement | null => {
    const wrapper = useRef(null);

    const handleWrapper = (event: any) => {
        // @ts-ignore  //FIXME:
        if (!wrapper?.current?.contains(event?.target)) {
            secondaryAction?.action();
        }
    };
    const listenKeyboard = (event: KeyboardEvent) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            console.log('close modal esc handler'); //FIXME: delete
            secondaryAction?.action();
        }
    };
    useEffect(() => {
        open ? document.body.classList.add('scroll-disable') : document.body.classList.remove('scroll-disable');
        document.body.onclick = open ? handleWrapper : null;
        open && document.addEventListener('keydown', listenKeyboard, false);
        return () => document.removeEventListener('keydown', listenKeyboard, false);
        // note: next line is ok
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return open ? (
        <Portal>
            <div ref={wrapper} className={`lib-modal__content ${className} `}>
                <div className="lib-modal__content-header">
                    <span className="lib-modal__content-header__title">{title}</span>
                    <Button className="close-btn" onClick={secondaryAction?.action}>
                        &#10006;
                    </Button>
                </div>

                <div className="lib-modal__content-body">{children}</div>
                <div className="lib-modal__content-footer">
                    {secondaryAction && <Button onClick={secondaryAction?.action}>{secondaryAction?.title}</Button>}
                    {primaryAction && <Button onClick={primaryAction?.action}>{primaryAction?.title}</Button>}
                </div>
            </div>
        </Portal>
    ) : null;
};

export default Modal;
