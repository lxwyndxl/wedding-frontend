const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_RSVP_GROUP':
      return action.users;

    case 'UPDATE_ATTENDING_STATUS':
      return state.map((user) => {
        if (user.user.id === action.userId) {
          const userCopy = Object.assign({}, user);
          userCopy.user.is_attending = action.status;
          return userCopy;
        } else {
          return user;
        }
      });

    case 'TOGGLE_EMAIL_EDIT_STATE':
      return state.map((user) => {

      });

    default:
      return state;
  }
}

export default users;
