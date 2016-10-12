import { connect } from 'react-redux';
import { hideModal } from '../actions/hide-modal';

import SimpleDialog from '../components/simple-dialog';

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.modalType != null,
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
