import React from 'react';


function ValorMin () {
    return <div>

             <input
                type="number"
                value={""}
                onChange={""}
                placeholder="Valor minimo"
              />
              </div> 
}
function ValorMax (){
    return <div>

         <input
            type="number"
            value={""}
            onChange={""}
            placeholder="Valor máximo"
          />
          </div> 
}
function NomeProduto (){
    return <div>
    
         <input
            type="number"
            value={""}
            onChange={""}
            placeholder="Nome do produto"
          />
          </div> 
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