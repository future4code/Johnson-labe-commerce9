import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  color:#14274E;
  text-align: center;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  
`

export default class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}


// function ValorMin () {
//     return <div>
//         <h3> ValorMin </h3>
//              <input
//                 type="number"
//                 value={""}
//                 onChange={""}
//               />
//               </div> 
// }
// function ValorMax (){
//     return <div>
//     <h3> ValorMax </h3>
//          <input
//             type="number"
//             value={""}
//             onChange={""}
//           />
//           </div> 
// }
// function NomeProduto (){
//     return <div>
//     <h3> NomeProduto </h3>
//          <input
//             type="number"
//             value={""}
//             onChange={""}
//           />
//           </div> 
// }
// function TituloF () {
//     return <h1>Filtro</h1>
// }
// function Filtro () {
//     return (
//         <div className="Filtro">
//             <TituloF/>
//             <ValorMin/>
//             <ValorMax/>
//             <NomeProduto/>
//         </div>
//     )
// }
// export default Filtro;