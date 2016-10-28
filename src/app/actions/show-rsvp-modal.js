import React from 'react';
import { showModal } from '../actions/show-modal';
import RsvpPasscode from '../containers/modals/rsvp-passcode';

const passcodeModalProps = {
  modalType: 'rsvp',
  modalProps: {
    title: 'RSVP Now',
    content: <RsvpPasscode />,
  },
};

export const showRsvpPasscodeModal = () => {
  return showModal(passcodeModalProps);
};
