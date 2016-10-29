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
        error: false,
      });
    case 'RECEIVE_RSVP_GROUP':
      return Object.assign({}, state, {
        userGroup: action.userGroup,
        users: action.users,
        isFetching: false,
        error: false,
      });
    case 'ERROR_RSVP_GROUP':
      return Object.assign({}, state, {
        error: true,
        isFetching: false,
      });
    default:
      return Object.assign({}, state, {
        error: false,
      });
  }
}

export default user;
