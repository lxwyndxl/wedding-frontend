import React from 'react';
import { showModal } from '../actions/show-modal';
import Rsvp from '../components/modals/rsvp/rsvp';

const modalProps = {
  modalType: 'rsvp',
  modalProps: {
    title: 'RSVP Now',
    content: <Rsvp/>,
  },
};

export const showRsvpModal = () => {
  return showModal(modalProps);
};
