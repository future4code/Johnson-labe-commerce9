import React from 'react';
import styled from 'styled-components';

const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
`

const CardIndividual = styled.div`
  border: 1px solid black;
  background-color: #F1F6F9;

`

const Img = styled.img`
  width: 250px;
  height: 300px;
  padding: 5px;
  
  

`
const TituloCamiseta = styled.p`
  text-align: center;
  color:#14274E;

`

const Botao = styled.button `
 background-color: #394867;
   width:100%;
   color:white;
   &:hover {
    cursor: pointer;
    opacity: 0.8;
    font-family: gotham-ultra-light;
    background-color: #283033;
    margin: 0 5px 0 0;
    color: white;
    text-align: center;    
    bottom: 0;
    left: 0;
    
  }

`
const DivOrdenacao = styled.div `
  display:flex;
  align-items:center;
  justify-content: space-between;
  
`




class CardProduto extends React.Component {
  state = {
    valorOrdem: "",

  }

  onChangeOrdem = (event) => {
    this.setState({ valorOrdem: event.target.value })
  }

  listaFiltrada = () => {
    return this.props.produto.sort((a, b) => this.state.valorOrdem === "crescente" ? a.value - b.value : b.value - a.value)
  }

  // onClickAdicionarAoCarrinho = (prod) => {
  //   console.log("Adicionar ao Carrinho", prod)

  //   const copiaCarrinho = [...this.state.carrinho];
  //   copiaCarrinho.push(prod);
  //   this.setState({carrinho: copiaCarrinho})
  // }

  render() {
    console.log(this.props.produto)
    console.log(this.state.valorOrdem)
    console.log(this.state.carrinho)
    const listaDeProdutos = this.listaFiltrada()

    return (
      <div>
        <DivOrdenacao>
          <div>
          <p ><strong>Quantidade de Produtos:</strong> {this.props.produto.length}</p>
          </div>
          <DivOrdenacao>
          <h4>Ordenação:  </h4>
         
          <select value={this.state.valorOrdem} onChange={this.onChangeOrdem}>
            <option value=""></option>
            <option value="decrescente">Decrescente</option>
            <option value="crescente">Crescente</option>
          </select>
          </DivOrdenacao>
        </DivOrdenacao>
        <Produtos>

          {listaDeProdutos.map((prod) => {
            return (

              <CardIndividual>
                <Img src={prod.imageUrl} alt="" />
                <TituloCamiseta><strong>{prod.name}</strong></TituloCamiseta>
                <p> Valor: {prod.value},00 </p>
                <Botao onClick={() => this.props.onClickAdicionarAoCarrinho(prod)} >Adicionar ao carrinho</Botao>
              </CardIndividual>

            )
          })}
        </Produtos>
      </div>
    );
  };
};

export default CardProduto;