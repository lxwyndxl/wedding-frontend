import React, { Component } from 'react';
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onDialogClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onDialogClose}
      />,
    ];

    return (
      <Dialog
        title="RSVP"
        actions={actions}
        modal={false}
        open={this.props.isOpen}
        onRequestClose={this.props.onDialogClose}
      >
        TODO
      </Dialog>
    );
  }
}

export default SimpleDialog;
