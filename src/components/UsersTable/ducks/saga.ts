import { put, takeLatest } from 'redux-saga/effects';
import { EUser } from './types';
import axios from 'axios';
function* fetchUsersData() {
    const url = 'https://my-json-server.typicode.com/MrJeyhun/fkserver4CP/users';
    const json = yield axios.get(url);
    console.table('userdata', json);
    yield put({ type: EUser.USERSDATARECIEVED, payload: json.data });
}
export function* usersActionsWatcher() {
    yield takeLatest(EUser.USERSDATAREQUESTED, fetchUsersData);
}
