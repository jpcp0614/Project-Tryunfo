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
      cardImage: 'https://exame.com/wp-content/uploads/2020/10/novo-trem-cptm.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  // enableButton() {
  //   this.setState(({
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //   }) => { // verificar os atributos
  //     const cardAttributes = [cardAttr1, cardAttr2, cardAttr3];
  //     const cardAtt = cardAttributes.map((att) => parseInt(att, 10));
  //     const maxAtt = 90;
  //     const maxSumAtt = 210;

  //     return ({
  //       isSaveButtonDisabled:
  //         (cardName && cardDescription && cardImage && cardRare
  //           && cardAtt.reduce((acc, curr) => acc + curr) <= maxSumAtt
  //           && cardAtt.every((card) => card >= 0 && card <= maxAtt)) });
  //   });
  // }

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            // hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </div>
    );
  }
}
export default App;
