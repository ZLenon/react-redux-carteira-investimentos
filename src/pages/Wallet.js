import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>Wallet</h1>
        <Header />
        <input
          data-testid="value-input"
        />
      </>
    );
  }
}

export default Wallet;
