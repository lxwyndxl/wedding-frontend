import { connect } from 'react-redux';
import Content from '../../components/modals/rsvp/rsvp-content';

const mapStateToProps = (state) => {
  const {
    userGroup,
    users,
  } = state.rsvp;

  return {
    userGroup,
    users,
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
