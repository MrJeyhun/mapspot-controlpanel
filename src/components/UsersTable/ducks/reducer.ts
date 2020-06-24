import { IUserState, IUserActions } from 'models';
import { EUser } from './types';

const initialState = {
    id: '',
    title: '',
    date: '',
    data: '',
    edit: '',
    status: '',
    progress: '',
};

const userReducer = (state: IUserState = initialState, action: IUserActions) => {
    switch (action.type) {
        case EUser.USERSELECTED:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
