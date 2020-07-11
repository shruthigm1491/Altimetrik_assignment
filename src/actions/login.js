import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  IS_AUTHENTICATED,
} from './types';
import Axios from 'axios';
import { setAlert } from '../actions/alert';

export const login = (username, password) => async (dispatch) => {
  try {
    const users = await Axios.get('https://swapi.dev/api/people');
    let enteredName = users.data.results.find((user) => user.name === username);
    let enteredPassword = users.data.results.filter(
      (user) => user.name === username
    );
    console.log(enteredName);
    if (enteredName && enteredName.birth_year !== password) {
      dispatch(setAlert('LOGIN SUCCESS', 'success'));
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch(setAlert('Invalid Credentials', 'danger'));
      dispatch({
        type: LOGIN_FAILURE,
      });
    }

    console.log(enteredPassword);
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};

export const isAuthenticated = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_AUTHENTICATED,
    });
  } catch (error) {
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};
