import React, { Component } from 'react';
import styled from 'styled-components'

import {
  Modal,
  Typography,
  Button
} from '@material-ui/core';

const ModalContainer = styled.div`
  position: absolute;
  width: 300px
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
  top: 40%;
  left: 35%;
  text-align: center;
`

class ErrorModal extends Component {
  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpen}
        onClose={this.props.handleClose}
      >
        <ModalContainer>
          <Typography variant="title" id="modal-title">
            {this.props.errorMessage}
          </Typography>
          <Typography variant="subheading" id="simple-modal-description">
            Please try again.
          </Typography>
          <Button onClick={this.props.handleClose} style={{textTransform: 'unset', border: '1px solid #727272'}}>Close
          </Button>
        </ModalContainer>
      </Modal>
    );
  }
}

export default ErrorModal;
