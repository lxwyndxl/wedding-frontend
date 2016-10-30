import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../../../../stylesheets/components/modals/rsvp/rsvp-passcode.css';
import { PASSCODE_LENGTH } from '../../../constants/configs';

import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

export function PasscodeField({ count, onPasscodeEnter, isDisabled }) {
  const passcodeStyle = {
    width: 50,
  };

  const inputStyle = {
    textAlign: 'center',
    fontSize: 35,
    height: 35,
    textTransform: 'capitalize',
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

    if (code.length === PASSCODE_LENGTH) {
      this.props.onPasscodeReady(code.toUpperCase());

    } else {
      let next = evt.target.parentElement;

      // backspace
      if (evt.keyCode === 8) {
        next = next.previousSibling;
        if (next) {
          next.children[0].value = "";
        }
      } else {
        next = next.nextSibling;
      }

      if (next) {
        next.children[0].focus();
      }
    }
  }

  render() {
    const {
      error,
      isFetching,
    } = this.props;

    const passcodeArray = new Array(PASSCODE_LENGTH);
    for (let i = 0; i < passcodeArray.length; i++) {
      passcodeArray[i] = i+1;
    }

    return (
      <aside className="rsvp-passcode-modal">
        <div className="rsvp-passcode">
          <div className="rsvp-prompt">
            <p>Please enter your group's rsvp code.</p>
            {
              error &&
              <p className="error">Incorrect code, please try again.</p>
            }
          </div>
          <div className="passcodes" ref="passcodeFields">
            {
              passcodeArray.map((count, index) => {
                return (
                  <PasscodeField
                    count={count}
                    onPasscodeEnter={this.onPasscodeEnter}
                    isDisabled={isFetching}
                    key={index}
                  />
                );
              })
            }
          </div>
          {isFetching && <CircularProgress />}
        </div>
      </aside>
    );
  }
}

RsvpPasscode.propTypes = {
  onPasscodeReady: PropTypes.func,
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
};

export default RsvpPasscode;
