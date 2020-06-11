import config from '../../config/config';
import actionTypes from '../../constants/actionTypes';

const initialState = {
    user: config.defaultUser,
    isLoading: config.defaultIsLoading,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case actionTypes.SET_USER_DATA: 
            return {
                ...state,
                user: action.payload,
            };
        case actionTypes.SET_COMMENTS_DATA: 
            return {
                ...state,
                user: {
                    ...state.user,
                    commentsData: action.payload,
                },
            };
        default:
            return state;
    }
};