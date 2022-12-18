import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <h1>Wallet</h1>
        <Header />
        <WalletForm />
        <Table />
      </>
    );
  }
}

export default Wallet;
