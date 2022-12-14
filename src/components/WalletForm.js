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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

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

        <label htmlFor="input-currency">
          Moeda:-
          <select
            id="input-currency"
            data-testid="currency-input"
          >
            {
              currencies.map((coins) => (
                <option
                  key={ coins }
                  name="currencies"
                  value={ coins }
                >
                  {coins}

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
            name="optionPag"
            value={ optionPag }
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de crédito</option>
            <option value="cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="input-tag">
          Tag:-
          <select
            id="input-tag"
            data-testid="tag-input"
            name="destinationTag"
            value={ destinationTag }
            onChange={ this.handleChange }
          >
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}
WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  optionPag: PropTypes.string,
  destinationTag: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
