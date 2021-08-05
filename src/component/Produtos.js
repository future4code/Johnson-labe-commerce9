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

  
  render(){
    console.log(this.props.produto)
    
  return (
    <Produtos>
      {this.props.produto.map((prod) =>{
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