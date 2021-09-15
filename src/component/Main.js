import React from 'react';
import CardProduto from './Produtos';
import Carrinho from './Carrinho';
import styled from 'styled-components';
import produto1 from '../img/produto1.jpg';
import produto2 from '../img/produto2.jpg';
import produto3 from '../img/produto3.jpg';
import produto4 from '../img/produto4.jpg';
import produto5 from '../img/produto5.jpg';



const DivCentral = styled.div `
  display: flex;
  width: 100%;
  color:#14274E;
    margin: 0;
    font-size: 0.6875rem;
    font-family: Arboria, sans-serif;
    font-weight: 300;
    line-height: 1.43;
   text-align: center;

`

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
    carrinho: [],
    // valorTotal: 0   
    
  };

  onClickAdicionarAoCarrinho = (prod) => {
    console.log("Adicionar ao Carrinho", prod)

    const copiaCarrinho = [...this.state.carrinho];
    copiaCarrinho.push(prod);
    this.setState({carrinho: copiaCarrinho});

    // console.log("valores", prod.value)
    // const valoresProdutos = [...this.state.valorTotal]
    // let somaTotal = valoresProdutos + prod.value
    // const somaTotalString = somaTotal.toString()
    // this.setState({valorTotal: somaTotalString})
    // console.log(somaTotalString)

  }

  render() {
    console.log("carrinho", this.state.carrinho)


    return (
      <div className="App">
        <DivCentral>
        <CardProduto produto={this.state.produtos} onClickAdicionarAoCarrinho={this.onClickAdicionarAoCarrinho}  />
        <Carrinho produtosCarrinho={this.state.carrinho} valorTotal={this.state.valorTotal} />
        </DivCentral>
        
      </div>
    );
  }
}

export default Main;