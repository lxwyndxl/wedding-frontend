import { connect } from 'react-redux';
import { showRsvpModal } from '../actions/show-rsvp-modal';
import Cta from '../components/cta';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRsvpClick: () => {
      dispatch(showRsvpModal());
    },
  };
};

const CtaSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cta);

export default CtaSection;
