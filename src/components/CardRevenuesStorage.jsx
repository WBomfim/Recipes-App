import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import shareIcon from '../images/shareIcon.svg';
import '../styles/CardRevenues.css';

function CardRevenuesStorage() {
  const { exibitionRevenues, handleShare, alertShare } = useContext(RevenuesContext);
  const history = useHistory();

  if (!exibitionRevenues) return null;

  return (
    <section className="cards">
      <div>
        {alertShare && <span>Link copied!</span>}
      </div>
      {exibitionRevenues.map((revenue, index) => (
        <div
          key={ `${index}-card-storage` }
          role="button"
          tabIndex={ revenue.id }
          onKeyPress={ () => {} }
          onClick={ () => history.push(`/${revenue.type}s/${revenue.id}`) }
          data-testid={ `${index}-recipe-card` }
        >
          {/* utilizar css para mudar o tamanho das imagens */}
          <img
            width="153px"
            height="150px"
            src={ revenue.image }
            alt={ `imagem-${revenue.name}` }
            data-testid={ `${index}-horizontal-image` }
          />
          <div>
            <div>
              <h4
                data-testid={ `${index}-horizontal-top-text` }
              >
                { revenue.type === 'food'
                  ? ` ${revenue.nationality} - ${revenue.category}`
                  : revenue.alcoholicOrNot }
              </h4>
              <button
                type="button"
                onClick={ () => handleShare(`http://localhost:3000/${revenue.type}s/${revenue.id}`) }
              >
                <img
                  src={ shareIcon }
                  alt="share-Icon"
                  data-testid={ `${index}-horizontal-share-btn` }
                />
              </button>
            </div>
            <h3
              data-testid={ `${index}-horizontal-name` }
            >
              { revenue.name }
            </h3>
            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              {`Done in: ${revenue.doneDate}`}
            </p>
          </div>
          {revenue.type === 'food' && revenue.tags.slice(0, 2).map((tag) => (
            <div key={ tag }>
              <p
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default CardRevenuesStorage;
