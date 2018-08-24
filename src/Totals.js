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

const TableCellContainer = styled(TableCell)`
  max-width: 0;
`;

export default props => (
  <Container>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCellContainer>Total Received</TableCellContainer>
            <TableCellContainer numeric>Total Sent</TableCellContainer>
            <TableCellContainer numeric>Final Balance</TableCellContainer>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCellContainer component="th" scope="row">
              {props.totalReceived}
            </TableCellContainer>
            <TableCellContainer numeric>{props.totalSent}</TableCellContainer>
            <TableCellContainer numeric>
              {props.finalBalance}
            </TableCellContainer>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </Container>
);
