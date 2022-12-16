import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionWalletExpenses, fetchApi, fetchApiCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    const { method, tag, value, description, currency, id } = this.state;
    const exchangeRates = await dispatch(fetchApi());
    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatch(actionWalletExpenses(expenses));
    this.setState({
      id: (id + 1),
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { method, tag, value, description, currency } = this.state;
    const { currencies } = this.props;

    return (
      <>
        <label htmlFor="input-value">
          value:
          <input
            id="input-value"
            data-testid="value-input"
            onChange={ this.handleChange }
            name="value"
            value={ value }
            type="number"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-inpu"
            data-testid="description-input"
            onChange={ this.handleChange }
            name="description"
            value={ description }
            type="text"
          />
        </label>

        <label htmlFor="input-currency">
          Moeda:-
          <select
            id="input-currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="currency"
            value={ currency }
          >
            {
              currencies.map((coin) => (
                <option
                  key={ coin }
                >
                  {coin}

                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="input-method">
          Metodo de Pagamento:-
          <select
            id="input-method"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="input-tag">
          Tag:-
          <select
            id="input-tag"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </>
    );
  }
}
WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  currency: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.wallet,
});

export default connect(mapStateToProps)(WalletForm);
