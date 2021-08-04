import React from 'react';
import Produtos from './Produtos';

function NumeroItem () {
    return <div> NUmero de iems</div>
}
function Ordenacao (){
    return <div>ORDEM</div>
}

function Cabecalho () {
    return <div>
        <NumeroItem/>
         <Ordenacao/>
    </div> 
}

function Main () {
    return (
        <div>
              <Cabecalho/>
              <section className='GridProd'>
              <Produtos/>
              <Produtos/>
              <Produtos/>
              </section>
        </div>
    )
}
export default Main;