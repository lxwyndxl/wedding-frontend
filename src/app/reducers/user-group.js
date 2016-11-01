import {
  RECEIVE_RSVP_GROUP,
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_DIET
} from '../actions/constants';

const initialState = {};

const userGroup = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RSVP_GROUP:
      return action.userGroup;

    case UPDATE_ATTENDING_DAY:
      return Object.assign({}, state, {
        [`lodging_${action.day}`]: action.status,
      });

    case UPDATE_NOTE:
      return Object.assign({}, state, {
        notes: action.text,
      });

    case UPDATE_DIET:
      return Object.assign({}, state, {
        diet: action.count,
      });

    default:
      return state;
  }
}

export default userGroup;
