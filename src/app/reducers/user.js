const initialState = {
  userGroup: {},
  users: [],
  isFetching: false,
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RSVP_GROUP':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIEVE_RSVP_GROUP':
      return {
        userGroup: action.userGroup,
        users: action.users,
        isFetching: false,
      };
    case 'ERROR_RSVP_GROUP':
      return Object.assign({}, state, {
        error: true,
        isFetching: false,
      });
    default:
      return state;
  }
}

export default user;
