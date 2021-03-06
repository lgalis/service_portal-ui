import * as ActionTypes from '../../Store/ActionTypes';

// Initial State
const initialState = {
    isLoading: true
};

// Reducer
export const AddPlatformReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PLATFORM_DATA + '_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.FETCH_PLATFORM_DATA + '_FULFILLED':
            return {
                ...state,
                ...action.payload,
                isLoading: false
            };
        case ActionTypes.ADD_PLATFORM + '_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.ADD_PLATFORM + '_FULFILLED':
            return {
                ...state,
                ...action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
