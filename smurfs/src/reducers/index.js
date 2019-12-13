import {
    FETCH_SMURFS_FAILURE,
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS
}   from '../actions';

const initialState = {
    smurfsData: [],
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    error: '',
    formValues: { name: '', age: '', height: '' }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfsData: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};