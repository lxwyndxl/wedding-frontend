import { connect } from 'react-redux';
import { showModal } from '../actions/show-modal';
import Cta from '../components/cta';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRsvpClick: () => {
      dispatch(showModal({
        modalType: 'rsvp',
        modalProps: {},
      }));
    },
  };
};

const CtaSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cta);

export default CtaSection;
