import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    dispatch(actionUser(this.state));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    /* Validando email */
    const validationEmail = /\S+@\S+\.\S+/;
    const emailOK = validationEmail.test(email);
    /* validação senha maior que seis */
    const SIX = 6;
    const passwordOK = password.length >= SIX;
    /* chamei ambos em uma const de validação do botão */
    const itsAvaliable = emailOK && passwordOK;
    return (
      <>
        <h1>Trybe Wallet</h1>
        <h2>Login</h2>
        <input
          id="emailCamp"
          type="text"
          required
          data-testid="email-input"
          placeholder="digite seu email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          id="senhaCamp"
          type="password"
          required
          data-testid="password-input"
          placeholder="digite sua senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          id="btn"
          type="button"
          onClick={ this.handleClick }
          disabled={ !itsAvaliable }
        >
          Entrar

        </button>
      </>
    );
  }
}
Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  history: PropTypes.func,
  dispatch: PropTypes.func,
}.isRequired;

/* const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
}); */

export default connect()(Login);
