import React, { Component } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as animationData from './loader.json';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';

import InputForm from './InputForm';
import Totals from './Totals';
import RecentTransactions from './RecentTransactions';
import ErrorModal from './ErrorModal';
// import Ad from './GoogleAdsense';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      bitcoinAddress: null,
      total_received: null,
      total_sent: null,
      final_balance: null,
      transactions: [],
      errorMessage: 'null',
      isOpen: false,
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    this.getBitcoinData();
  };

  handleChange = address => {
    this.setState({ bitcoinAddress: address });
  };

  handleError(err) {
    if (err.response && err.response.data) {
      this.setState({
        loading: false,
        isOpen: true,
        errorMessage: err.response.data,
      });
    } else {
      /* If there's a network error, reload the app */
      window.location.reload();
    }
  }

  refetchBitcoinData = () => {
    // Set refetch interval to 3 minutes to try to avoid rate-limiting
    setInterval(this.getBitcoinData, 180000);
  };

  getBitcoinData = () => {
    axios
      .get(
        `https://blockchain.info/multiaddr?cors=true&active=${this.state.bitcoinAddress}`
      )
      .then(res => {
        this.setState(
          {
            loading: false,
            total_received: res.data.addresses[0].total_received / 100000000,
            total_sent: res.data.addresses[0].total_sent / 100000000,
            final_balance: res.data.addresses[0].final_balance / 100000000,
            transactions: res.data.txs,
            displayAddress: this.state.bitcoinAddress,
          },
          () => this.refetchBitcoinData()
        );
      })
      .catch(err => {
        this.handleError(err);
      });
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <Wrapper>
        {this.state.loading && (
          <Lottie options={defaultOptions} height={400} width={400} />
        )}

        {this.state.errorMessage && (
          <ErrorModal
            isOpen={this.state.isOpen}
            handleClose={this.handleClose}
            errorMessage={this.state.errorMessage}
          />
        )}

        {!this.state.loading && (
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <InputForm
                  onChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  value={this.state.value}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <Totals
                  totalReceived={this.state.total_received}
                  totalSent={this.state.total_sent}
                  finalBalance={this.state.final_balance}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <RecentTransactions
                  transactions={this.state.transactions}
                  displayAddress={this.state.displayAddress}
                />
              </Col>
            </Row>
          </Container>
        )}
      </Wrapper>
    );
  }
}
