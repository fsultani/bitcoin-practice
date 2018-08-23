import React from 'react';
import styled from 'styled-components';

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export default props => (
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
            <TableCell component="th" scope="row">
              {props.totalReceived}
            </TableCell>
            <TableCell numeric>{props.totalSent}</TableCell>
            <TableCell numeric>{props.finalBalance}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </Container>
);
