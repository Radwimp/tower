import {
    EDIT_USER_LABEL_ERROR,
    EDIT_USER_LABEL_FETCH,
} from '../constants';

export interface EditUserLabelError {
    code?: number;
    message?: string;
}

export interface EditUserLabelFetch {
    type: typeof EDIT_USER_LABEL_FETCH,
    payload: {
        uid: string,
        key: string,
        value: string,
        scope: string,
    };
}

export interface EditUserLabelError {
    type: typeof EDIT_USER_LABEL_ERROR,
    payload: EditUserLabelError,
}

export type EditLabelAction = EditUserLabelFetch | EditUserLabelError;

export const editLabel = (payload: EditUserLabelFetch['payload']): EditUserLabelFetch => ({
    type: EDIT_USER_LABEL_FETCH,
    payload,
});

export const editLabelError = (payload: EditUserLabelError['payload']): EditUserLabelError => ({
    type: EDIT_USER_LABEL_ERROR,
    payload,
});
