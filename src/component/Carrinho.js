import React from 'react';
import styled from 'styled-components';

const TituloCarrinho = styled.h1 `
    margin-left: 10px;
    color: red;
    


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
            <div>
                <TituloCarrinho>Carrinho:</TituloCarrinho>
                {this.props.produtosCarrinho.map((cadaProduto) => {
                    return (
                        <p>1x - {cadaProduto.name} - {cadaProduto.value},00</p>
                        
                        
                    )
                })}

                <p>Total:{this.valorTotal()},00 </p>
            </div>)
    };
};
export default Carrinho;