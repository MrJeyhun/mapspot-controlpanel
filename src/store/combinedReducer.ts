import { combineReducers } from 'redux';
import userReducer from 'components/UsersTable/ducks/reducer';

const combinedReducer = combineReducers({
    user: userReducer,
});

export default combinedReducer;

// export interface IRootStateFromCombinedReducer extends ReturnType<typeof combinedReducer> {} // it is imported in models
