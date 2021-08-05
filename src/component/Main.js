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
            value:400000.0,
            imageUrl: "https://picsum.photos/200/200"
          },
          {
            id: 3,
            name: "Starlink",
            value:400000.0,
            imageUrl: "https://picsum.photos/200/200"
          }
  
      ]
    };
  
    render() {
      return (
        <div className="App">
            
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