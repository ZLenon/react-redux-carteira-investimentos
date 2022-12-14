import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      optionPag: '',
      destinationTag: '',
    };
  }

  async componentDidMount() {
    await fetchAPI();
  }

  render() {
    const { optionPag, destinationTag } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <label htmlFor="input-value">
          Valor:
          <input
            id="input-value"
            data-testid="value-input"
            type="text"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-inpu"
            data-testid="description-input"
            type="text"
          />
        </label>
        <select data-testid="currency-input">
          Moeda:
          {
            currencies.map((coins) => (
              <option
                key={ coins }
                value={ coins }
              >
                {coins}

              </option>
            ))
          }
        </select>
        <select
          data-testid="method-input"
          value={ optionPag }
        >
          Metodo de Pagamento:
          <option value="dinheiro">Dinheiro</option>
          <option value="cartão de crédito">Cartão de crédito</option>
          <option value="cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          value={ destinationTag }
        >
          Tag:
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saúde">Saúde</option>
        </select>
      </>
    );
  }
}
WalletForm.propTypes = {
  currencies: PropTypes.string,
  optionPag: PropTypes.string,
  destinationTag: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
