export const requestRsvpGroup = () => {
  return {
    type: 'REQUEST_RSVP_GROUP',
  };
};

export const receiveRsvpGroup = ({ user_group, users }) => {
  return {
    type: 'RECEIVE_RSVP_GROUP',
    userGroup: user_group,
    users,
  };
};
