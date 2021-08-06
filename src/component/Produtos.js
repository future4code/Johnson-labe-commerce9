import React from 'react';
import styled from 'styled-components';

const Produtos = styled.div `
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  
       


`

const CardIndividual = styled.div `
    border: 1px solid black;

`

class CardProduto extends React.Component {
  state = { 
    valorOrdem: ""
  
  }

  onChangeOrdem = (event) => {
    this.setState({valorOrdem: event.target.value})
  }

  listaFiltrada = () => {
    return this.props.produto.sort((a,b) => this.state.valorOrdem === "crescente" ? a.value - b.value : b.value - a.value)
  }


  
  render(){
    console.log(this.props.produto)
    console.log(this.state.valorOrdem)
    const listaDeProdutos = this.listaFiltrada()
    
  return (
    <div>
        <div>
          <h4>Ordenação: </h4>
          <select value={this.state.valorOrdem} onChange={this.onChangeOrdem}>
            <option value=""></option>
            <option value="decrescente">Decrescente</option>
            <option value="crescente">Crescente</option>
          </select>
          </div>
    <Produtos>
      
      {listaDeProdutos.map((prod) =>{
      return (

        <CardIndividual>
        <img src={prod.imageUrl} alt="" />
        {prod.name}
        <p> Valor: {prod.value},00 </p>
        <button >Adicionar ao carrinho</button>
        </CardIndividual>

      )
    })}
    </Produtos>
    </div>
  );
};
};







// function BoxProdutos () {
//    return(<div className="Mainbox">
     
//     <h1>Produto</h1>
//     <h2>Valor</h2>
//     <button>Comprar</button>
//     </div>) 
// }






// function Produtos () {
//     return (
//         <div>
//             <BoxProdutos/>
//         </div>
//     )
// }
export default CardProduto;