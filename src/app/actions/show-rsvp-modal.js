import React from 'react';
import { showModal } from '../actions/show-modal';

const modalProps = {
  modalType: 'rsvp',
  modalProps: {
    title: 'RSVP Now',
    content: <div className="hello">Hewo</div>,
  },
};

export const showRsvpModal = () => {
  return showModal(modalProps);
};
