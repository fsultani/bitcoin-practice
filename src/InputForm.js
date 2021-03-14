import React, { Component } from 'react';
import styled from 'styled-components'

import {
  Input,
  FormControl,
  Button,
  InputLabel,
} from '@material-ui/core';

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
`;

const InputContainer = styled(Input)`
  margin-right: 50px;
`;

const FormControlContainer = styled(FormControl)`
  width: 75%;
`;

const SubmitButton = styled(Button)`
  width: 25%;
  height: 50%;
`;

export default class InputForm extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <FormContainer onSubmit={this.props.handleSubmit}>
        <FormControlContainer margin="normal">
          <InputLabel htmlFor="address">Enter Bitcoin address</InputLabel>
          <InputContainer
            value={this.props.value}
            onChange={this.handleChange}
            id="address"
            name="address"
            autoComplete="address"
            autoFocus
          />
        </FormControlContainer>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
        >
          Search Here
        </SubmitButton>
      </FormContainer>
    );
  }
}
