import {
  RECEIVE_RSVP_GROUP,
  UPDATE_ATTENDING_STATUS,
  UPDATE_USER_EMAIL
} from '../actions/constants';

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RSVP_GROUP:
      return action.users;

    case UPDATE_ATTENDING_STATUS:
      return state.map((user) => {
        if (user.id === action.userId) {
          return Object.assign({}, user, {
            is_attending: action.status,
          });
        }
        return user;
      });

    case UPDATE_USER_EMAIL:
      return state.map((user) => {
        if (user.id === action.userId) {
          return Object.assign({}, user, {
            email: action.text,
          });
        }
        return user;
      });

    default:
      return state;
  }
}

export default users;
