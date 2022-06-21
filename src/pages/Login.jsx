import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  // const [disabled, setDisabled] = useState(''); *TERMINAR

  const onHandleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const onHandleChangePassword = ({ target }) => {
    setPassord(target.value);
  };

  const onDisabled = () => {// TERMINAR
    const verification = 6;
    if (!email.contain('@') && !email.contain('.com') && email.length < verification) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  // const history = useHistory(); TERMINAR

  return (
    <form>
      <header>Login</header>
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ onHandleChangeEmail }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ onHandleChangePassword }
          />
        </label>

        <button
          data-testid="login-submit-btn"
          type="button"
          // onClick={ () => history.push('/foods') } TERMINAR
          // disabled={ onDisabled } TERMINAR
        >
          Enter
        </button>
      </div>
    </form>
  );
}

export default Login;
