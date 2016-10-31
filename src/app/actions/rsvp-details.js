import {
  UPDATE_ATTENDING_DAY,
  UPDATE_NOTE,
  UPDATE_VEGI
} from './constants';

export const updateAttendingDay = (day, status) => {
  return {
    type: UPDATE_ATTENDING_DAY,
    day,
    status,
  };
};

export const updateNote = (text) => {
  return {
    type: UPDATE_NOTE,
    text,
  };
};

export const updateVegi = (count) => {
  return {
    type: UPDATE_VEGI,
    count,
  };
};
