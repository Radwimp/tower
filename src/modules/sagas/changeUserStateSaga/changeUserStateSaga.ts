import { call, put } from 'redux-saga/effects';
import {
    changeUserStateError,
    ChangeUserStateFetch,
} from '../../actions';
import { API } from '../../../api';

export function* changeUserStateSaga(action: ChangeUserStateFetch) {
    try {
        yield call(API.put(), `/api/v2/barong/admin/users`, action.payload);
    } catch (error) {
        yield put(changeUserStateError(error));
    }
}
