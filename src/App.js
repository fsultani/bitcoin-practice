import React, { Component } from 'react';
import styled from 'styled-components'

import Lottie from 'react-lottie';
import * as animationData from './loader.json'
import axios from 'axios';

import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core';

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`

const InputContainer = styled(Input)`
  margin-right: 50px;
`

const FormControlContainer = styled(FormControl)`
  width: 75%;
`
const SubmitButton = styled(Button)`
  width: 25%;
`

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`

class AllEmployees extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      bitcoinAddress: null,
      total_received: null,
      total_sent: null,
      final_balance: null,
      transactions: [],
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true })

    axios.get(`https://blockchain.info/multiaddr?cors=true&active=${this.state.bitcoinAddress}`)
    .then(res => {
      console.log("res.data.txs\n", res.data.txs)
      this.setState({
        loading: false,
        total_received: res.data.addresses[0].total_received/100000000,
        total_sent: res.data.addresses[0].total_sent/100000000,
        final_balance: res.data.addresses[0].final_balance/100000000,
        transactions: res.data.txs,
      })
    })
  }

  handleChange = event => {
    this.setState({ bitcoinAddress: event.target.value })
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <Wrapper>
        {this.state.loading &&
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        }
        {!this.state.loading &&
          <div>
            <form onSubmit={this.handleSubmit}>
              <FormControlContainer className="FormControlContainer" margin="normal">
                <InputLabel htmlFor="address">Enter Bitcoin address</InputLabel>
                <InputContainer
                  value={this.state.value}
                  onChange={this.handleChange}
                  id="address"
                  name="address"
                  autoComplete="address"
                  autoFocus
                />
              </FormControlContainer>
              <SubmitButton className="SubmitButton"
                type="submit"
                variant="raised"
                color="primary"
              >
                Search
              </SubmitButton>
            </form>

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
                      <TableCell component="th" scope="row">{this.state.total_received}</TableCell>
                      <TableCell numeric>{this.state.total_sent}</TableCell>
                      <TableCell numeric>{this.state.final_balance}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Container>

            <Container>
              <Paper>
              <Typography variant="subheading" align="center" color="textSecondary" component="p">
                Recent Transactions
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
                    {this.state.transactions.map(transaction => {
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
          </div>
        }
      </Wrapper>
    );
  }
}

export default AllEmployees;
