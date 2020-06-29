import { IUsers } from 'models';
import { EUser } from './types';

const initialState = {
    byId: {
        '': {
            id: '',
            name: '',
            date: '',
            email: '',
            phone: '',
            status: '',
            totaltasks: 0,
        },
    },
    allIds: [],
    selectedUserId: '',
};
// const initialState = null;

const userReducer = (state: IUsers = initialState, action: any): IUsers => {
    switch (action.type) {
        case EUser.USERSELECTED:
            return { ...state, selectedUserId: action.payload };
        case EUser.USERSDATARECIEVED:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
