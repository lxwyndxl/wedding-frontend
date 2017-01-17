import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchLoginCredentials } from '../actions/LoginActions';

import Login from '../components/Login';

const mapStateToProps = (state) => {
  const { error } = state;

  return {
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: () => {
      dispatch(fetchLoginCredentials());
    },
    onRouteToConfirmation: () => {
      dispatch(push('/rsvp-confirmation'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
