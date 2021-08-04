import React from 'react';

function ProdutoNoCarrinho () {
    return <div> item Comprado</div>
}
function Titulo (){
    return <h1>Carrinho</h1>
}
function Vtotal (){
    return <h1>Total</h1>
}

function Carrinho () {
    return (
        <div className='Carrinho'>
            <Titulo/>
            <ProdutoNoCarrinho/>
            <Vtotal/>
        </div>
    )
}
export default Carrinho;