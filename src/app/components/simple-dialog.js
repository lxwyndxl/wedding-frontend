import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SimpleDialog extends Component {

  render() {
    const {
      cancelText,
      onDialogClose,
      submitText,
      title,
      isOpen,
      content,
    } = this.props;

    const actions = [
      <FlatButton
        label={cancelText}
        primary={false}
        onTouchTap={onDialogClose}
      />,
      <FlatButton
        label={submitText}
        primary={true}
        keyboardFocused={true}
        onTouchTap={onDialogClose}
      />,
    ];

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={isOpen}
        onRequestClose={onDialogClose}
      >
        {content}
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  onDialogClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

SimpleDialog.defaultProps = {
  submitText: 'Submit',
  cancelText: 'Cancel',
  title: '',
  content: <div />,
};

export default SimpleDialog;
