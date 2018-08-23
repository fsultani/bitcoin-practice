import React, { Component } from 'react';
import styled from 'styled-components'

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@material-ui/core';

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`

export default class RecentTransactions extends Component {
  render() {
    return (
      <Container>
        <Paper>
        <Typography variant="title" align="center" color="textSecondary" component="p">
          Recent Transactions
        </Typography>
        <Typography variant="subheading" align="center" color="primary" component="p">
          {this.props.displayAddress && `Address: ${this.props.displayAddress}`}
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          {this.props.displayAddress && `Transactions will update every minute`}
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
              {this.props.transactions.map(transaction => {
                return (
                  <TableRow key={transaction.tx_index}>
                    <TableCell component="th" scope="row">
                      {transaction.time}
                    </TableCell>
                    <TableCell numeric>{transaction.result/100000000}</TableCell>
                    <TableCell numeric>{transaction.balance/100000000}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    )
  }
}
