const initialState = {
  userGroup: null,
  users: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RSVP_GROUP':
      return {};
    case 'RECEIEVE_RSVP_GROUP':
      return {};
    default:
      return initialState;
  }
}

export default user;
