import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [], // requisito 8 - começar vazio
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateSaveButton = this.validateSaveButton.bind(this);
    this.verifyAttributeFields = this.verifyAttributeFields.bind(this);
    this.verifySuperTrunfoCard = this.verifySuperTrunfoCard.bind(this);
    this.verifyTextFields = this.verifyTextFields.bind(this);
  }

  onInputChange({ target }) { // requisito 4 - verificar se é um checked (depois, vai pro Card.js)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ // setar o estado do valor, quando é atribuido no target
      [name]: value, // [] é uma forma dinamica de receber o valor
    }, () => this.validateSaveButton()); // requisito 5 - habilita o botao salvar
  }

  onSaveButtonClick(event) { // requisito 6 - clicar no botao
    event.preventDefault();
    this.verifySuperTrunfoCard(); // requisito 7

    const { // requisito 8 - variaveis dos estados
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const savedCard = { // requisito 8 - pegar as variaveis e adicionar na carta salva
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((previousState) => ({ // requisito 8 - o estado anterior pode ser sem carta nenhuma ou conforme for adicionando as cartas no array
      cardList: [...previousState.cardList, savedCard], // salva de acordo com o estado anterior
    }));

    this.setState({ // requisito 6 - setar os estados depois de clicar no botão
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  createCardList() { // requisito 8 - funcao para criar array de cartas
    const { cardList } = this.state; // pega o array que inicia vazio cardList: []
    return cardList
      .map((card) => ( // faz um map no cardList -> tem que retornar um card para cada carta
        <Card
          key={ card.cardName } // colocar uma chave unica cada vez que salvar
          { ...card } // as props de cada card
        />
      ));
  }

  verifySuperTrunfoCard() { // requisito 7 - verifica se tem um card Super Trunfo (depois, vai pro Form.js)
    const { cardTrunfo } = this.state;
    return cardTrunfo && this.setState({ hasTrunfo: true });
  }

  verifyAttributeFields() { // requisito 5 - verificar o valor dos atributos
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sumAttrs = attr1 + attr2 + attr3;
    const maxAttValue = 90;
    const maxSumAttValue = 210;

    if (attr1 > maxAttValue || attr1 < 0
      || attr2 > maxAttValue || attr2 < 0
      || attr3 > maxAttValue || attr3 < 0
      || sumAttrs > maxSumAttValue) {
      return false;
    }
    return true;
  }

  verifyTextFields() { // requisito 5 - verificar de os campos estão vazios
    const { cardName, cardDescription, cardImage } = this.state;
    if (cardName === '' || cardDescription === '' || cardImage === '') {
      return false;
    }
    return true;
  }

  validateSaveButton() { // requisito 5 - validar o botao ao preencher os campos corretamente
    if (this.verifyAttributeFields() && this.verifyTextFields()) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    const { onInputChange, onSaveButtonClick } = this;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form // requisitos 4 - ao digitar no card, o componente recebe o mesmo valor aqui (linhas abaixo)
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
          />
          <Card // requisitos 4 - ao digitar no card, o componente recebe o mesmo valor aqui (linhas abaixo)
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />

          {
            this.createCardList() // requisito 8
          }
        </main>
      </div>
    );
  }
}
export default App;
