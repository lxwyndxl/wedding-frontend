export const showModal = ({ modalType, modalProps }) => {
  return {
    type: 'SHOW_MODAL',
    modalType: modalType,
    modalProps,
  };
};
