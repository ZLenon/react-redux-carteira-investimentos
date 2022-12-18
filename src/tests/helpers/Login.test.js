import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('Testando Tela Inicial', () => {
  it('Textando elementos no LOGIN', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const title = screen.getByRole('heading', { name: /trybe wallet/i });
    expect(title).toBeDefined();

    const component = screen.getByRole('heading', { name: /login/i });
    expect(component).toBeDefined();

    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button.disabled).toBe(true);
    expect(button.type).toBe('button');

    const inpultPlaceLogin = screen.getByPlaceholderText('digite seu email');
    expect(inpultPlaceLogin.placeholder).toBeDefined();
    const inpulEmail = screen.getByRole('textbox');
    userEvent.type(inpulEmail, 'lenon@gmail.com');
    expect(inpulEmail.value).toBe('lenon@gmail.com');

    const inpultPlaceSenha = screen.getByPlaceholderText('digite sua senha');
    expect(inpultPlaceSenha.placeholder).toBeDefined();
    userEvent.type(inpultPlaceSenha, '123456');
    expect(inpultPlaceSenha.value).toBe('123456');

    expect(button.disabled).toBe(false);

    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
