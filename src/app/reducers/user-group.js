const initialState = {};

const userGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_RSVP_GROUP':
      return action.userGroup;

    default:
      return state;
  }
}

export default userGroup;
