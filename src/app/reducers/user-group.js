import {
  RECEIVE_RSVP_GROUP,
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_DIET,
  UPDATE_ADDRESS
} from '../actions/constants';

const initialState = {};

const userGroup = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RSVP_GROUP:
      return Object.assign({}, state, action.userGroup);

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

    case UPDATE_ADDRESS:
      return Object.assign({}, state, {
        [action.field]: action.text,
      });

    default:
      return state;
  }
}

export default userGroup;
