import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionWalletDelete /* actionWalletEdit */ } from '../redux/actions';

class Table extends Component {
/*   handleEdit = (id) => {
    const { dispatch } = this.props;
    dispatch(actionWalletEdit(id));
  }; */

  handleDel = (id) => {
    const { dispatch, allInfos } = this.props;
    dispatch(actionWalletDelete(id, allInfos));
  };

  render() {
    const { allInfos } = this.props;
    const validation = allInfos.length > 0;
    return (
      <>
        <h3>Dispesas</h3>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          { !validation ? <p>Ainda Nenhuma Dispesa adicionada</p> : (
            allInfos.map((info) => (
              <tbody key={ info.id }>
                <tr>
                  <td>{info.description}</td>
                  <td>{info.tag}</td>
                  <td>{info.method}</td>
                  <td>{(info.value * 1).toFixed(2)}</td>
                  <td>{info.exchangeRates[info.currency].name}</td>
                  <td>{(info.exchangeRates[info.currency].ask * 1).toFixed(2)}</td>
                  <td>
                    {(info.value * info.exchangeRates[info.currency].ask)
                      .toFixed(2)}
                  </td>
                  <td>
                    <button
                      data-testid="edit-btn"
                      type="button"
                      /* onClick={ () => this.handleEdit(info.id) } */
                    >
                      Editar dispesas
                    </button>
                  </td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => this.handleDel(info.id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            )))}
        </table>
      </>
    );
  }
}
Table.propTypes = {
  allInfos: PropTypes.arrayOf(
    PropTypes.string,
  ),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  allInfos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
