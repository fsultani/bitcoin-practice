import React, { Component } from 'react';
import styled from 'styled-components'

import Lottie from 'react-lottie';
import * as animationData from './loader.json'
import axios from 'axios';

import InputForm from './InputForm'
import Totals from './Totals'
import RecentTransactions from './RecentTransactions'
import ErrorModal from './ErrorModal'

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`

export default class MainApp extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      bitcoinAddress: null,
      total_received: null,
      total_sent: null,
      final_balance: null,
      transactions: [],
      errorMessage: 'null',
      isOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  refetchBitcoinData() {
    setInterval(() => this.getBitcoinData(), 60000)
  }

  getBitcoinData() {
    axios.get(`https://blockchain.info/multiaddr?cors=true&active=${this.state.bitcoinAddress}`)
    .then(res => {
      this.setState({
        loading: false,
        total_received: res.data.addresses[0].total_received/100000000,
        total_sent: res.data.addresses[0].total_sent/100000000,
        final_balance: res.data.addresses[0].final_balance/100000000,
        transactions: res.data.txs,
        displayAddress: this.state.bitcoinAddress,
      }, () => this.refetchBitcoinData())
    })
    .catch(err => {
      this.setState({
        isOpen: true,
        loading: false,
        errorMessage: err.response.data,
      })
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true })
    this.getBitcoinData()
  }

  handleChange = address => {
    this.setState({ bitcoinAddress: address })
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

        {this.state.errorMessage &&
          <ErrorModal
            isOpen={this.state.isOpen}
            handleClose={this.handleClose}
            errorMessage={this.state.errorMessage}
          />
        }

        {!this.state.loading &&
          <div>
            <InputForm
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              value={this.state.value}
            />

            <Totals
              totalReceived={this.state.total_received}
              totalSent={this.state.total_sent}
              finalBalance={this.state.final_balance}
            />

            <RecentTransactions
              transactions={this.state.transactions}
              displayAddress={this.state.displayAddress}
            />
          </div>
        }
      </Wrapper>
    );
  }
}
