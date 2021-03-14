import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Paper, Grid, CardContent, Typography } from '@material-ui/core';

const CardContentContainer = styled(CardContent)`
  flex-grow: 1;
`;

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export default props => (
  <Container>
    {props.displayAddress && (
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
          {props.displayAddress &&
            `Address: ${
              props.displayAddress
            } - Transactions will update every 3 minutes`}
        </Typography>
        <Grid container spacing={40}>
          {props.transactions.map(transaction => (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CardContentContainer>
                <Typography gutterBottom variant="subheading" component="h2">
                  {moment(transaction.time * 1000)._d.toString()}
                </Typography>
                <Typography gutterBottom variant="subheading" component="h2">
                  Amount: {transaction.result / 100000000}
                </Typography>
                <Typography gutterBottom variant="subheading" component="h2">
                  Balance: {transaction.balance / 100000000}
                </Typography>
              </CardContentContainer>
            </Grid>
          ))}
        </Grid>
      </Paper>
    )}
  </Container>
);
