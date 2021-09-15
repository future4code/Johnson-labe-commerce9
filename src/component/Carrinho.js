import React from 'react';
import styled from 'styled-components';

const TituloCarrinho = styled.h1 `
    display: flex;
    margin-left: 10px;
    color: #14274E;
    justify-content: center;
    align-items: center;

`
const CardCarrinho =  styled.div `

    border: 1px solid black;
    margin-left: 5px;
    color: #14274E;    
    font-size: 0.6875rem;
    font-family: Arboria, sans-serif;
    font-weight: 300;
    line-height: 1.43;    
    width: 180px;
`

class Carrinho extends React.Component {
     valorTotal = () => {
            let valorSomado = 0
            for(let cadaProduto of this.props.produtosCarrinho) {
                valorSomado += cadaProduto.value 
            }

            return valorSomado



        }

    render() {
        console.log("produtos da main", this.props.produtosCarrinho)
       
        
        return (
            <CardCarrinho>
                <TituloCarrinho>Carrinho:</TituloCarrinho>
                {this.props.produtosCarrinho.map((cadaProduto) => {
                    return (
                        <p>1x - {cadaProduto.name} - {cadaProduto.value},00</p>
                        
                        
                    )
                })}

                <p>Total:{this.valorTotal()},00 </p>
            </CardCarrinho>)
    };
};
export default Carrinho;