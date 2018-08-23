import React, { Component } from 'react';
import styled from 'styled-components'

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`

class AllEmployees extends Component {
  render() {
    return (
      <Container>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Total Received</TableCell>
                <TableCell numeric>Total Sent</TableCell>
                <TableCell numeric>Final Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">{this.props.totalReceived}</TableCell>
                <TableCell numeric>{this.props.totalSent}</TableCell>
                <TableCell numeric>{this.props.finalBalance}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Container>
    );
  }
}

export default AllEmployees;
