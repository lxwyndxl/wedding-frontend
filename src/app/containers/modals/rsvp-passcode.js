import { connect } from 'react-redux';
import { fetchRsvpGroup } from '../../actions/rsvp-group';

import Passcode from '../../components/modals/rsvp/rsvp-passcode';

const mapStateToProps = (state) => {
  const {
    isFetching,
    error,
  } = state.user;

  return {
    isFetching,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPasscodeReady: (code) => {
      dispatch(fetchRsvpGroup(code));
    },
  };
};

const RsvpPasscode = connect(
  mapStateToProps,
  mapDispatchToProps
)(Passcode);

export default RsvpPasscode;
