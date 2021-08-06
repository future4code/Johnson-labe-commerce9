import React from 'react';
import CardProduto from './Produtos';

// function NumeroItem () {
//     return <div> NUmero de iems</div>
// }
// function Ordenacao (){
//     return <div>ORDEM</div>
// }

// function Cabecalho () {
//     return <div>
//         <NumeroItem/>
//          <Ordenacao/>
//     </div> 
// }

class Main extends React.Component {
    state = {
      produtos: [
        {
          id: 1,
          name: "Foguete da Missão Apollo 11",
          value: 10000.0,
          imageUrl: "https://picsum.photos/200/200"
        },
        {
          id: 2,
          name: "Sputnik",
          value: 500000.0,
          imageUrl: "https://picsum.photos/200/200"
        },
        {
          id: 3,
          name: "Starlink",
          value:400000.0,
          imageUrl: "https://picsum.photos/200/200"
        },
        {
            id: 3,
            name: "Starlink",
            value:50000.0,
            imageUrl: "https://picsum.photos/200/200"
          },
          {
            id: 3,
            name: "Starlink",
            value:100.0,
            imageUrl: "https://picsum.photos/200/200"
          }
  
      ],
      // valorOrdem: ""
    };
    
    // onChangeOrdem = (event) => {
    //   this.setState({valorOrdem: event.target.value})
    // }

    


    render() {
     
      
      return (
        <div className="App">
          {/* <div>
          <h4>Ordenação: </h4>
          <select value={this.state.valorOrdem} onChange={this.onChangeOrdem}>
            <option value=""></option>
            <option value="decrescente">Decrescente</option>
            <option value="crescente">Crescente</option>
          </select>
          </div> */}
          <CardProduto produto={this.state.produtos} />
        </div>
      );
    }
  }
  
 

// function Main () {
//     return (
//         <div>
//               {/* <Cabecalho/>
//               <section className='GridProd'>
//               <Produtos/>
//               <Produtos/>
//               <Produtos/>
//               </section> */}
//         </div>
//     )
// }
export default Main;