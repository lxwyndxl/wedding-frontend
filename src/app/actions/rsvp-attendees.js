import { UPDATE_ATTENDING_STATUS, TOGGLE_EMAIL_EDIT_STATE } from './constants';

export const updateAttendingStatus = (userId, status) => {
  return {
    type: 'UPDATE_ATTENDING_STATUS',
    userId,
    status,
  };
};

export const toggleEmailEditState = (userId, state) => {
  return {
    type: 'TOGGLE_EMAIL_EDIT_STATE',
    userId,
    state,
  };
};
