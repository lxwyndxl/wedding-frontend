import { connect } from 'react-redux';
import Content from '../../components/modals/rsvp/rsvp-content';

const mapStateToProps = (state) => {
  const {
    userGroup,
    users,
    rsvpState,
  } = state.rsvp;

  return {
    userGroup,
    users,
    rsvpState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const RsvpContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default RsvpContent;
