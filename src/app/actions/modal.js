export const hideModal = () => {
  return {
    type: 'HIDE_MODAL',
    modalType: null,
    modalProps: {},
  };
};

export const showModal = ({ modalType, modalProps }) => {
  return {
    type: 'SHOW_MODAL',
    modalType: modalType,
    modalProps,
  };
};
