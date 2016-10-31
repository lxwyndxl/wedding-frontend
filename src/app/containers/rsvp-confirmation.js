import { connect } from 'react-redux';
import Content from '../components/rsvp-confirmation';
import { showRsvpPasscodeModal } from '../actions/show-rsvp-modal';

const mapStateToProps = (state) => {
  const {
    userGroup,
    users,
  } = state.user;

  return {
    userGroup,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRsvpClick: (code) => {
      dispatch(showRsvpPasscodeModal());
    },
  };
};

const RsvpConfirmation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default RsvpConfirmation;
