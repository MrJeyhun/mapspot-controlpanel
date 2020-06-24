import { IUserActions, IUserState } from 'models';
import { EUser } from './types';

export const userSelected = (userData: IUserState): IUserActions => {
    return {
        type: EUser.USERSELECTED,
        payload: userData,
    };
};
