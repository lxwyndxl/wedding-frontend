import {
  REQUEST_RSVP_GROUP,
  RECEIVE_RSVP_GROUP,
  ERROR_RSVP_GROUP
} from './constants';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '../constants/helpers';
import { showRsvpContentModal } from './show-rsvp-modal';

export const requestRsvpGroup = () => {
  return {
    type: REQUEST_RSVP_GROUP,
  };
};

export const receiveRsvpGroup = ({ user_group, users }) => {
  return {
    type: RECEIVE_RSVP_GROUP,
    userGroup: user_group,
    users,
  };
};

export const errorLogin = (error) => {
  return { error };
};

function canShowRsvpContent(json, dispatch) {
  if (Object.keys(json.userGroup).length > 0) {
    dispatch(showRsvpContentModal());
  }
}

export const fetchRsvpGroup = (email) => {
  const POST_URL = apiUrl('sessions');

  function fetchData(dispatch) {
    return fetch(POST_URL, {
        method: 'POST',
        body: { session: { email } },
      })
      .then((response) => {
        debugger;
        if (response.user_id) {
          dispatch(receiveRsvpGroup(json))
        } else {
          dispatch(errorLogin('Invalid email address'))
        }
      })
      .catch(err => dispatch(errorLogin(err)));
  }

  return dispatch => {
    dispatch(requestRsvpGroup());
    return setTimeout(fetchData.bind(this, dispatch), 1000);
  };
}
