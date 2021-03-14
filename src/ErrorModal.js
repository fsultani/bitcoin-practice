import React from 'react';
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

export default (props => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={props.isOpen}
    onClose={props.handleClose}
  >
    <ModalContainer>
      <Typography variant="title" id="modal-title">
        {props.errorMessage}
      </Typography>
      <Typography variant="subheading" id="simple-modal-description">
        Please try again.
      </Typography>
      <Button onClick={props.handleClose} style={{textTransform: 'unset', border: '1px solid #727272'}}>Close
      </Button>
    </ModalContainer>
  </Modal>
))
