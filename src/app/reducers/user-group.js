import {
  RECEIVE_RSVP_GROUP,
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_VEGI
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

    case UPDATE_VEGI:
      return Object.assign({}, state, {
        vegi: action.count,
      });

    default:
      return state;
  }
}

export default userGroup;
