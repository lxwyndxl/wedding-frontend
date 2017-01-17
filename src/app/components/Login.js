import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default function Login({ error }) {
  return (
    <section className="login">
      <TextField
        hintText="wedding_party@bao.com"
        errorText={error}
        floatingLabelText="Email address"
      />
      <FlatButton
        label="Login"
        onClick={onLoginClick}
        secondary
      />
    </section>
  );
}

Login.propTypes = {
  error: PropTypes.string,
  onLoginClick: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: null,
};
