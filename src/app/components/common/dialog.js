import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { hideModal } from '../../actions/modal';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SimpleDialog extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.onDialogSubmit = this.onDialogSubmit.bind(this);
  }

  onDialogSubmit() {
    const {
      routeOnSuccess,
      onSubmit,
      state,
    } = this.props;

    this.dispatch(onSubmit(state));
    hideModal();
    if (routeOnSuccess) {
      push(routeOnSuccess);
    }
  }

  render() {
    const {
      cancelText,
      submitText,
      title,
      isOpen,
      content,
      actionable,
      disableSubmit,
    } = this.props;

    const customContentStyle = {
      width: '80%',
      maxWidth: 'none',
    };

    const customBodyStyle = {
      padding: 0,
    };

    const actions = actionable ? [
      <FlatButton
        label={cancelText}
        primary={false}
        onTouchTap={hideModal}
      />,
      <FlatButton
        label={submitText}
        primary={true}
        onTouchTap={this.onDialogSubmit}
        disabled={disableSubmit}
      />,
    ] : [];

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={isOpen}
        onRequestClose={hideModal}
        autoScrollBodyContent={true}
        children={content}
        contentStyle={customContentStyle}
        bodyStyle={customBodyStyle}
      />
    );
  }
}

const mapStateToProps = state => {
  const {
    modalType,
    modalProps,
  } = state.modal;

  return {
    state: state,
    isOpen: modalType != null,
    title: modalProps.title,
    content: modalProps.content,
    actionable: modalProps.actionable,
    disableSubmit: modalProps.disableSubmit,
    routeOnSuccess: modalProps.routeOnSuccess,
    onSubmit: modalProps.onSubmit,
  };
};

SimpleDialog.propTypes = {
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
  actionable: PropTypes.bool,
  disableSubmit: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
  state: PropTypes.object,
};

SimpleDialog.defaultProps = {
  submitText: 'Submit',
  cancelText: 'Cancel',
  title: '',
  content: <div/>,
  actionable: true,
  disableSubmit: false,
  onSubmit: () => {},
};

SimpleDialog = connect(mapStateToProps)(SimpleDialog);

export default SimpleDialog;
