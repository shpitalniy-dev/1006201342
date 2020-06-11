import actionTypes from '../../constants/actionTypes';

export const setUserData = payload => ({ type: actionTypes.SET_USER_DATA, payload });
export const sendMessage = payload => ({ type: actionTypes.SEND_MESSAGE, payload });
export const setIsLoading = payload => ({ type: actionTypes.SET_IS_LOADING, payload });
export const initialization = () => ({ type: actionTypes.INITIALIZATION });
export const setCommentsData = payload => ({ type: actionTypes.SET_COMMENTS_DATA, payload });