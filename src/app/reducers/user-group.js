import { RECEIVE_RSVP_GROUP,
         UPDATE_ATTENDING_DAY } from '../actions/constants';

const initialState = {};

const userGroup = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RSVP_GROUP:
      return action.userGroup;

    case UPDATE_ATTENDING_DAY:
      switch(action.day) {
        case 'friday':
          return Object.assign({}, state, {
            lodging_friday: action.status,
          });
        case 'saturday':
          return Object.assign({}, state, {
            lodging_saturday: action.status,
          });
        case 'sunday':
          return Object.assign({}, state, {
            lodging_sunday: action.status,
          });
        default:
          return state
      }

    default:
      return state;
  }
}

export default userGroup;
