import { combineReducers } from 'redux';
import users from './users';
import userGroup from './user-group';

const initialState = {
  isFetching: false,
  error: false,
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RSVP_GROUP':
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
      });

    case 'RECEIVE_RSVP_GROUP':
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
      });

    case 'ERROR_RSVP_GROUP':
      return Object.assign({}, state, {
        error: true,
        isFetching: false,
      });

    default:
      return Object.assign({}, state, {
        error: false,
      });
  }
}

const rsvp = combineReducers({
  request,
  userGroup,
  users,
});

export default rsvp;
