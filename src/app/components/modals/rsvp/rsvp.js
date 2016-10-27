import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRsvpGroup, receiveRsvpGroup } from '../../../actions/rsvp-group';
import '../../../../stylesheets/components/modals/rsvp/rsvp.css';

import TextField from 'material-ui/TextField';

export function PasscodeField({ count, onPasscodeEnter }) {
  const passcodeStyle = {
    width: 50,
  };

  const inputStyle = {
    textAlign: 'center',
    fontSize: 35,
    height: 35
  };

  const textFieldName = "passcode-" + count;

  return (
    <TextField
      name={textFieldName}
      className="passcode-field"
      style={passcodeStyle}
      inputStyle={inputStyle}
      maxLength="1"
      onChange={onPasscodeEnter}
    />
  );
};

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.onPasscodeEnter = this.onPasscodeEnter.bind(this);
  }

  onPasscodeEnter(evt) {
    const target = evt.target;
    const inputNum = parseInt(target.name.split('-')[1], 10);

    if (Number.isInteger(inputNum) && inputNum === 5) {
      this.dispatch(requestRsvpGroup());

    } else {
      target
        .parentElement
        .nextSibling
        .children[0]
        .focus();
    }
  }

  render() {
    return (
      <aside className="rsvp-modal">
        <p className="rsvp-prompt">Please enter your group's pin.</p>
        <div className="passcodes">
          {
            [1,2,3,4,5].map((count, index) => {
              return (
                <PasscodeField
                  count={count}
                  onPasscodeEnter={this.onPasscodeEnter}
                  key={index}
                />
              );
            })
          }
        </div>
      </aside>
    );
  }
}

Rsvp = connect()(Rsvp);

export default Rsvp;
