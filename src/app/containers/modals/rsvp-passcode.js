import { connect } from 'react-redux';
import { fetchRsvpGroup } from '../../actions/rsvp-group';

import Passcode from '../../components/modals/rsvp/rsvp-passcode';

const mapStateToProps = (state) => {
  const {
    userGroup,
    isFetching,
    error,
  } = state.user;

  return {
    shouldRenderRsvpGroup: Object.keys(userGroup) > 0,
    isFetching,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPasscodeReady: (code) => {
      dispatch(fetchRsvpGroup(code));
    }
  };
};

const RsvpPasscode = connect(
  mapStateToProps,
  mapDispatchToProps
)(Passcode);

export default RsvpPasscode;
