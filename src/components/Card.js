import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component { // requisito 3 - componentes card e as props
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h1>Pré-visualização</h1>
        <div>
          <h3 data-testid="name-card">{ cardName }</h3>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <p data-testid="description-card">{ cardDescription }</p>
          <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
          <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
          <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
          <h3 data-testid="rare-card">{ cardRare }</h3>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
          {/* {requisito 4 - tag condicional - renderiza com o texto Super Trunfo} */}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

// Consulta: https://github.com/tryber/sd-015-b-project-tryunfo/blob/assis-meneghetti-fabri-tryunfo/src/components/Card.js
