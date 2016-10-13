import React from 'react';
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
        modalProps: {
          title: 'RSVP Now',
          content: <div class="hello">Hewo</div>,
        },
      }));
    },
  };
};

const CtaSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cta);

export default CtaSection;
