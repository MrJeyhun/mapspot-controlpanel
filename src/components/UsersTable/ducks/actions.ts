import { IUserSlected, IDataRequested } from 'models';
import { EUser } from './types';

export const userSelected = (id: string): IUserSlected => {
    return {
        type: EUser.USERSELECTED,
        payload: id,
    };
};

export const usersDataRequested = (): IDataRequested => {
    return {
        type: EUser.USERSDATAREQUESTED,
    };
};
