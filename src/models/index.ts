import { EUser } from 'components/UsersTable/ducks/types';

// IUser
export interface IUserState {
    id: string;
    title: string;
    date: string;
    data: string;
    edit: string;
    status: string;
}

interface ISelectUser {
    type: EUser;
    payload: IUserState;
}

export interface IUserActions extends ISelectUser {} // to give reducer's action
