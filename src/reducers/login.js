import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USERS,
  LOGOUT_SUCCESS,
  IS_AUTHENTICATED,
  AUTH_ERROR,
} from '../actions/types';

const initialState = {
  user: '',
  isLogin: false,
  token: localStorage.getItem('isLogin'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: localStorage.setItem('isLogin', true),
      };
    case IS_AUTHENTICATED: {
      return {
        ...state,
        isLogin: localStorage.getItem('isLogin'),
      };
    }
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      return {
        ...state,
        isLogin: false,
        token: localStorage.removeItem('isLogin'),
      };
    default:
      return state;
  }
};
