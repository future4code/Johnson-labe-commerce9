import React from 'react';
import CardProduto from './Produtos';
import produto1 from '../img/produto1.jpg';
import produto2 from '../img/produto2.jpg';
import produto3 from '../img/produto3.jpg';
import produto4 from '../img/produto4.jpg';
import produto5 from '../img/produto5.jpg';

class Main extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 59,
        imageUrl: produto1
      },
      {
        id: 2,
        name: "Sputnik",
        value: 49,
        imageUrl: produto2
      },
      {
        id: 3,
        name: "Starlink",
        value: 39,
        imageUrl: produto3
      },
      {
        id: 4,
        name: "Starlink",
        value: 49,
        imageUrl: produto4
      },
      {
        id: 5,
        name: "Camiseta Nasa, mangas longas",
        value: 69,
        imageUrl: produto5
      }

    ],
    
  };
  render() {


    return (
      <div className="App">
        <CardProduto produto={this.state.produtos} />
      </div>
    );
  }
}

export default Main;