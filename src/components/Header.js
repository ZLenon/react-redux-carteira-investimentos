import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      totalExpenses: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, cambio } = this.state;
    return (
      <>
        <h3 data-testid="email-field">{email}</h3>
        <h3 data-testid="total-field">{totalExpenses}</h3>
        <h3 data-testid="header-currency-field">{cambio}</h3>
      </>
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
});

export default connect(mapStateToProps)(Header);
