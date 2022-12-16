import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.value
    * curr.exchangeRates[curr.currency].ask, 0);
    const { cambio } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">{totalExpenses.toFixed(2)}</h3>
        <h3 data-testid="header-currency-field">{cambio}</h3>
      </header>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string,
  totalExpenses: PropTypes.number,
  cambio: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  ...state.wallet,
});

export default connect(mapStateToProps)(Header);
