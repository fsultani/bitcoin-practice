import React from 'react';
import styled from 'styled-components';

import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';

const Container = styled.div`
  margin-top: 20px;
`;

const CardContainer = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContentContainer = styled(CardContent)`
  flex-grow: 1;
`;

const cards = [
  {
    description: 'Total Received',
    value: 'totalReceived'
  },
  {
    description: 'Total Sent',
    value: 'totalSent'
  },
  {
    description: 'Final Balance',
    value: 'finalBalance'
  }
];

export default props => (
  <Container>
    <Grid container spacing={40}>
      {cards.map(card => (
        <Grid item key={card} sm={6} md={4} lg={4}>
          <Paper>
            <CardContainer>
              <CardContentContainer>
                <Typography gutterBottom variant="headline" component="h2">
                  {card.description}
                </Typography>
                <Typography>{props[card.value]}</Typography>
              </CardContentContainer>
            </CardContainer>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);
