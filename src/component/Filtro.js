import React from 'react';

function ValorMin () {
    return <h3> ValorMin </h3>
}
function ValorMax (){
    return <h2>ValorMax</h2>
}
function NomeProduto (){
    return <h2>nomeDoProduto</h2>
}

function TituloF () {
    return <h1>Filtro</h1>
}
function Filtro () {
    return (
        <div className="Filtro">
            <TituloF/>
            <ValorMin/>
            <ValorMax/>
            <NomeProduto/>
        </div>
    )
}
export default Filtro;