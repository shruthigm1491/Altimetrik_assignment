import { combineReducers } from 'redux';
import planet from './planet';
import login from './login';
import alert from './alert';
export default combineReducers({
  planet,
  login,
  alert,
});
