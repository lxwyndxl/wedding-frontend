import {
  RECEIVE_RSVP_GROUP,
  UPDATE_ATTENDING_DAY
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

    default:
      return state;
  }
}

export default userGroup;
