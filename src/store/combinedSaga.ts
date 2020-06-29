import { all } from 'redux-saga/effects';

import { usersActionsWatcher } from 'components/UsersTable/ducks/saga';

export default function* rootSaga() {
    yield all([usersActionsWatcher()]);
}
