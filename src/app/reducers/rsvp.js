import { combineReducers } from 'redux';
import users from './users';
import userGroup from './user-group';

import {
  REQUEST_RSVP_GROUP,
  RECEIVE_RSVP_GROUP,
  ERROR_RSVP_GROUP,
  POSTING_RSVP_GROUP,
  POSTED_RSVP_GROUP,
  TOGGLE_ADDRESS_EDIT_STATE,
  TOGGLE_EMAIL_EDIT_STATE
} from '../actions/constants';

const initialRequestState = {
  isFetching: false,
  error: false,
  isPosting: false,
};

const request = (state = initialRequestState, action) => {
  switch (action.type) {
    case REQUEST_RSVP_GROUP:
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
      });

    case RECEIVE_RSVP_GROUP:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
      });

    case ERROR_RSVP_GROUP:
      return Object.assign({}, state, {
        error: true,
        isFetching: false,
      });

    case POSTING_RSVP_GROUP:
      return Object.assign({}, state, {
        isPosting: false,
        error: false,
      });

    case POSTED_RSVP_GROUP:
      return Object.assign({}, state, {
        isPosting: false,
        error: false,
      });

    default:
      return Object.assign({}, state, {
        error: false,
      });
  }
}

const initialRsvpState = {
  isEditingAddress: false,
  isEditingEmailMap: {},
};

const rsvpState = (state = initialRsvpState, action) => {
  function editingEmail(emailMap, id) {
    emailMap[id] = !emailMap[id];
    return emailMap;
  }

  switch (action.type) {
    case TOGGLE_ADDRESS_EDIT_STATE:
      return Object.assign({}, state, {
        isEditingAddress: !state.isEditingAddress,
      });

    case TOGGLE_EMAIL_EDIT_STATE:
      return Object.assign({}, state, {
        isEditingEmailMap: editingEmail(state.isEditingEmailMap, action.userId)
      });

    default:
      return state;
  }
}

const rsvp = combineReducers({
  request,
  userGroup,
  users,
  rsvpState,
});

export default rsvp;
