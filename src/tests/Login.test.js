import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const PASSWORD_TEST = 'abc1234';
const EMAIL_TEST = 'alguem@alguem.com';
const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_BTN = 'login-submit-btn';

describe('1- Verifica a rota de Login', () => {
  it('Verifica se a página de login é renderizada no "/"', () => {
    const { history } = renderWithRouter(<App />, '/');

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });
});

describe('2 - Crie os elementos da tela de login', () => {
  it('O input de email deve possuir o atributo data-testid="email-input"', () => {
    renderWithRouter(<App />, '/');

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    expect(emailInput).toBeInTheDocument();
  });

  it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
    renderWithRouter(<App />, '/');

    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    expect(passwordInput).toBeInTheDocument();
  });

  it('O botão "Enter" deve possuir o atributo data-testid="login-submit-btn"', () => {
    renderWithRouter(<App />, '/');

    const btnLogin = screen.getByTestId(LOGIN_BTN);
    expect(btnLogin).toBeInTheDocument();
  });
});

describe('3- A pessoa deve conseguir escrever seu email no input de email', () => {
  it('- É possível escrever o email', () => {
    renderWithRouter(<App />, '/');

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    userEvent.type(emailInput, EMAIL_TEST);
    expect(emailInput).toHaveValue(EMAIL_TEST);
  });
});

describe('4-  A pessoa deve conseguir escrever sua senha no input de senha', () => {
  it('- É possível escrever a senha', () => {
    renderWithRouter(<App />, '/');

    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    userEvent.type(passwordInput, PASSWORD_TEST);
    expect(passwordInput).toHaveValue(PASSWORD_TEST);
  });
});

describe('5- Verifica se formulário de login',
  () => {
    it('O botão deve estar desativado se o email for inválido', () => {
      renderWithRouter(<App />, '/');

      const btnLogin = screen.getByTestId(LOGIN_BTN);
      expect(btnLogin).toBeDisabled();
    });

    it('O botão deve estar desabilitadado se a senha deve tiver 6 caracteres ou menos',
      () => {
        renderWithRouter(<App />, '/');

        const inputPassword = screen.getByTestId(PASSWORD_INPUT);
        const btnLogin = screen.getByTestId(LOGIN_BTN);
        userEvent.type(inputPassword, PASSWORD_TEST);

        expect(btnLogin).toHaveAttribute('disabled');
      });

    it('O botão está desabilitadado apenas com email preenchido', () => {
      renderWithRouter(<App />, '/');

      const inputEmail = screen.getByTestId(EMAIL_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.type(inputEmail, EMAIL_TEST);

      expect(btnLogin).toHaveAttribute('disabled');
    });

    it('O botão deve estar ativado se o email e a senha forem válidos', () => {
      renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId('login-submit-btn');
      userEvent.type(emailInput, EMAIL_TEST);
      userEvent.type(passwordInput, PASSWORD_TEST);

      expect(btnLogin).not.toHaveAttribute('disabled');
    });

    it('O botão deve estar desabilitado com email válido e senha invalida', () => {
      renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.type(emailInput, EMAIL_TEST);
      userEvent.type(passwordInput, '1234');

      expect(btnLogin).toHaveAttribute('disabled');
    });

    it('O botão deve estar desabilitado com senha valida e email invalido', () => {
      renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.type(passwordInput, PASSWORD_TEST);
      userEvent.type(emailInput, '@email.com');

      expect(btnLogin).toHaveAttribute('disabled');
    });
  });

describe('6- Salva no localStorage as chaves "mealsToken e cocktailsToken"', () => {
  it(' Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage',
    () => {
      renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.type(emailInput, EMAIL_TEST);
      userEvent.type(passwordInput, PASSWORD_TEST);
      userEvent.click(btnLogin);

      expect(window.localStorage.getItem('mealsToken')).toEqual('1');
      expect(window.localStorage.getItem('cocktailsToken')).toEqual('1');
    });
});

describe('7- Salve o e-mail no localStorage na chave user após a submissão', () => {
  it('Após a submissão o e-mail deve estar salvo em localStorage na chave user',
    () => {
      renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      const userStorage = '{"email":"alguem@alguem.com"}';
      userEvent.type(emailInput, EMAIL_TEST);
      userEvent.type(passwordInput, PASSWORD_TEST);
      userEvent.click(btnLogin);
      expect(window.localStorage.getItem('user')).toEqual(userStorage);
    });
});

describe('8- Redirecione para a tela principal de receitas após a  validação do login',
  () => {
    it('- A rota muda para a tela principal de receitas de comidas', async () => {
      const { history } = renderWithRouter(<App />, '/');

      const emailInput = screen.getByTestId(EMAIL_INPUT);
      const passwordInput = screen.getByTestId(PASSWORD_INPUT);
      const btnLogin = screen.getByTestId(LOGIN_BTN);
      userEvent.type(emailInput, EMAIL_TEST);
      userEvent.type(passwordInput, PASSWORD_TEST);
      await userEvent.click(btnLogin);

      const { pathname } = history.location;
      expect(pathname).toEqual('/foods');
    });
  });

// Referência utilizada para implementar o teste do requisito 6:
// https://github.com/testing-library/react-testing-library/blob/main/README.md;
