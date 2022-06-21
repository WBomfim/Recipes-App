import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link
        to="./drinks"
        className="footer-buttons"
      >
        <img
          src={ drinkIcon }
          alt="Taça de bebida"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="./explore"
        className="footer-buttons"
      >
        <img
          src={ exploreIcon }
          alt="Buçola"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="./foods"
        className="footer-buttons"
      >
        <img
          src={ mealIcon }
          alt="Garfo e faca"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
