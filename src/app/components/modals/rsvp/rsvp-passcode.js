import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../../../../stylesheets/components/modals/rsvp/rsvp-passcode.css';

import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

export function PasscodeField({ count, onPasscodeEnter, isDisabled }) {
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
      onKeyUp={onPasscodeEnter}
      autoFocus={count === 1}
      disabled={isDisabled}
    />
  );
};

class RsvpPasscode extends Component {
  constructor(props) {
    super(props);
    this.onPasscodeEnter = this.onPasscodeEnter.bind(this);
  }

  onPasscodeEnter(evt) {
    let inputs = ReactDOM.findDOMNode(this.refs.passcodeFields).children;
    let code = '';

    inputs = Array.prototype.slice.call(inputs);
    inputs.forEach(input => code += input.firstChild.value);

    if (code.length === 5) {
      this.props.onPasscodeReady(code);

    } else if (evt.keyCode !== 8) {
      const next = evt.target
                      .parentElement
                      .nextSibling;

      if (next) {
        next.children[0].focus();
      }
    }
  }

  render() {
    return (
      <aside className="rsvp-modal">
        <p className="rsvp-prompt">Please enter your group's pin.</p>
        <div className="passcodes" ref="passcodeFields">
          {
            [1,2,3,4,5].map((count, index) => {
              return (
                <PasscodeField
                  count={count}
                  onPasscodeEnter={this.onPasscodeEnter}
                  isDisabled={this.props.isFetching}
                  key={index}
                />
              );
            })
          }
        </div>
        {this.props.isFetching && <CircularProgress />}
      </aside>
    );
  }
}

RsvpPasscode.propTypes = {
  onPasscodeReady: PropTypes.func,
  userGroup: PropTypes.object,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
};

export default RsvpPasscode;
