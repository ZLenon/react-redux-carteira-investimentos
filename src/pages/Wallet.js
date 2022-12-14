import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>Wallet</h1>
        <Header />
        <WalletForm />
      </>
    );
  }
}

export default Wallet;
