import React from 'react';
import Main from './component/Main';
import './App.css';
import Carrinho from './component/Carrinho';
import Filtro from './component/Filtro';

export default class App extends React.Component{
  state={valorMin:0, valorMax:10000, nome:""}

  AlterarValorMin=(valor) => {
  this.setState({valorMin:valor})
  }

  AlterarValorMax=(valor) => {
    this.setState({valorMax:valor})
  }

  Alterarnome=(valor) => {
    this.setState({nome:valor})
    console.log(valor)
  }

  render()
  {
    return (
      <div className='central'>
        <Filtro
        Alterarnome={this.Alterarnome}
        nome={this.state.nome}
        />

        <Main/>
        <Carrinho/>

      </div>
    )
  }



}