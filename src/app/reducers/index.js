import { combineReducers } from 'redux';
import modal from './modal';
import rsvp from './rsvp';

const Reducers = combineReducers({
  modal,
  rsvp,
});

export default Reducers;
