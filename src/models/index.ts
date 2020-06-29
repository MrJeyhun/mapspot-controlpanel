import { EUser } from 'components/UsersTable/ducks/types';
import { IRootStateCombinedReducer } from 'store/combinedReducer';
// IUser

export interface IUser {
    id: string;
    name: string;
    date: string;
    email: string;
    phone: string;
    status: string;
    totaltasks: number;
}

export interface IUsers {
    byId: { [key: string]: IUser };
    allIds: string[];
    selectedUserId: string;
}

export interface IUserSlected {
    type: EUser;
    payload: string;
}

// saga models

export interface IDataRequested {
    type: EUser;
}
export interface IUsersDataReceived {
    type: EUser;
    payload: {
        byId: { [key: string]: IUser };
        allIds: string[];
    };
}

// export interface IUserActions extends ISelectUser {} // to give reducer's action
export interface IRootState extends IRootStateCombinedReducer {}
