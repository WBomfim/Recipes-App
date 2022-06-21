import React from 'react';

function Login() {
  return (
    <main>
      <header>Login</header>
      <div>
        <input
          type="email"
          name="email"
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          // onChange={ () = onHandleChange()}
        />
        <button
          data-testid="login-submit-btn"
          type="button"
        >
          Enter
        </button>
      </div>
    </main>
  );
}

export default Login;
