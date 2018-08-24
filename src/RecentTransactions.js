import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export default props => (
  <Container>
    <Paper>
      <Typography
        variant="title"
        align="center"
        color="textSecondary"
        component="p"
      >
        Recent Transactions
      </Typography>
      <Typography
        variant="subheading"
        align="center"
        color="primary"
        component="p"
      >
        {props.displayAddress && `Address: ${props.displayAddress}`}
      </Typography>
      <Typography
        variant="subheading"
        align="center"
        color="textSecondary"
        component="p"
      >
        {props.displayAddress && 'Transactions will update every 3 minutes'}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Amount</TableCell>
            <TableCell numeric>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactions.map(transaction => {
            return (
              <TableRow key={transaction.tx_index}>
                <TableCell component="th" scope="row">
                  {moment(transaction.time * 1000)._d.toString()}
                </TableCell>
                <TableCell numeric>{transaction.result / 100000000}</TableCell>
                <TableCell numeric>{transaction.balance / 100000000}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);
