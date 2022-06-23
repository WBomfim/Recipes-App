import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setTokens, setUserEmail } from '../helpers/localStorageFunc';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const verification = 6;
    const errors = [
      !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      !password || password.length <= verification,
    ];
    const hasErrors = errors.some((error) => error);
    setDisabled(hasErrors);
  }, [email, password]);

  const onHandleClick = () => {
    setTokens();
    setUserEmail(email);
    history.push('/foods');
  };

  return (
    <form>
      <header>Login</header>
      <div>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ ({ target }) => { setEmail(target.value); } }
            placeholder="enter a valid email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ ({ target }) => { setPassord(target.value); } }
            placeholder="enter a valid password"
          />
        </label>
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ disabled }
          onClick={ onHandleClick }
        >
          Enter
        </button>
      </div>
    </form>
  );
}

export default Login;
