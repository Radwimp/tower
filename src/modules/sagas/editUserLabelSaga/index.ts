import { takeLatest } from 'redux-saga/effects';
import {
    EDIT_USER_LABEL_FETCH,
} from '../../constants';
import { editUserLabelSaga } from './editUserLabelSaga';

export function* rootEditUserLabelSaga() {
    yield takeLatest(EDIT_USER_LABEL_FETCH, editUserLabelSaga);
}
