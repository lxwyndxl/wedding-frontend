import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';

const Reducers = combineReducers({
  modal,
  user,
});

export default Reducers;
