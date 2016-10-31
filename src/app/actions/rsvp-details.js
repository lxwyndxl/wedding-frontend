import { UPDATE_ATTENDING_DAY } from './constants';

export const updateAttendingDay = (day, status) => {
  return {
    type: UPDATE_ATTENDING_DAY,
    day,
    status,
  };
};
