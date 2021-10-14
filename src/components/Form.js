import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Adicionar nova carta</h1>
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              type="text"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
            />
          </label>
          <label htmlFor="attr1-input">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
            />
          </label>
          <label htmlFor="attr2-input">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="attr3-input">
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              type="text"
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              type="number"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
