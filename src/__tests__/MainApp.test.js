import React from 'react';
import MainApp from '../MainApp';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('returns a valid address', () => {
  const wrapper = shallow(<MainApp
    handleChange={jest.fn()}
    handleSubmit={jest.fn()}
  />)
  wrapper.setState({
    loading: false,
    total_received: 1571174.22487431,
    total_sent: 1570207.45500479,
    final_balance: 966.76986952,
    transactions: [
      {
        time: 1535008717,
        result: 39989776,
        balance: 96676986952,
      },
      {
        time: 1535008682,
        result: 1499989776,
        balance: 96636997176,
      },
      {
        time: 1535008455,
        result: 2716966,
        balance: 95137007400,
      },
      {
        time: 1535008077,
        result: -218137,
        balance: 95134290434,
      },
      {
        time: 1535006582,
        result: 14274049,
        balance: 95134508571,
      }
    ],
    displayAddress: '1J37CY8hcdUXQ1KfBhMCsUVafa8XjDsdCn',
  })
  expect(wrapper).toMatchSnapshot();
});

it('returns an invalid address', () => {
  const wrapper = shallow(<MainApp
    handleChange={jest.fn()}
    handleSubmit={jest.fn()}
    handleClose={jest.fn()}
  />)
  wrapper.setState({
    displayAddress: '1J37CY8hcdUXQ1KfBhMCsUVafa8XjDsdCd',
    errorMessage: "Invalid Bitcoin Address. Please try again.",
    isOpen: true,
  })
  expect(wrapper).toMatchSnapshot();
});