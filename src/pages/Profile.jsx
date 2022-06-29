import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getUserEmail } from '../helpers/storageEmail';
import '../styles/Profile.css';

function Profile() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('Login não efetuado');

  useEffect(() => {
    const email = getUserEmail();
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const onHandleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="profile-header">
      {console.log(userEmail)}
      <Header title="Profile" />
      <div className="profile-page">
        <p data-testid="profile-email">{ userEmail }</p>
        <button
          type="button"
          name="Done Recipes"
          data-testid="profile-done-btn"
          disabled={ false }
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          name="Favorite Recipes"
          data-testid="profile-favorite-btn"
          disabled={ false }
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          name="Logout"
          data-testid="profile-logout-btn"
          disabled={ false }
          onClick={ onHandleClick }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
