import React from 'react';
function ValorMin () {
    return <div>
        <h3> ValorMin </h3>
             <input
                type="number"
                value={""}
                onChange={""}
              />
              </div> 
}
function ValorMax (){
    return <div>
    <h3> ValorMax </h3>
         <input
            type="number"
            value={""}
            onChange={""}
          />
          </div> 
}
function NomeProduto (){
    return <div>
    <h3> NomeProduto </h3>
         <input
            type="number"
            value={""}
            onChange={""}
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