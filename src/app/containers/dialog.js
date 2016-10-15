import { connect } from 'react-redux';
import { hideModal } from '../actions/hide-modal';

import SimpleDialog from '../components/common/simple-dialog';

const mapStateToProps = (state) => {
  const {
    modalType,
    modalProps,
  } = state.modal;

  return {
    isOpen: modalType != null,
    title: modalProps.title,
    content: modalProps.content,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDialogClose: () => {
      dispatch(hideModal());
    }
  };
};

const Dialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleDialog);

export default Dialog;
