import React from 'react';
import Main from './component/Main';
import './App.css';
import Carrinho from './component/Carrinho';
import Filtro from './component/Filtro';

export default class App extends React.Component{
  // state = {
  //   carrinho: ["aaaaaaaaaaaaaa", "asdsdsdasassa"],
  // };


  // onClickAdicionarCarrinho = (produto) => {
  //   const copiaCarrinho = [...this.state.carrinho];
  //   copiaCarrinho.push(produto);

  //   this.setState({carrinho: copiaCarrinho});
  // }

  
  render(){

    return (
      <div className='central'>
        <Filtro/>
        <Main />
        {/* <Carrinho /> */}

      </div>
    )
  }



}