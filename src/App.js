import React from 'react';
import Main from './component/Main';
import './App.css';
import Carrinho from './component/Carrinho';
import Filters from './component/Filtro';
import Rodape  from './component/rodape';








export default class App extends React.Component{
  // state = {
  //   carrinho: ["aaaaaaaaaaaaaa", "asdsdsdasassa"],
  // };


  // onClickAdicionarCarrinho = (produto) => {
  //   const copiaCarrinho = [...this.state.carrinho];
  //   copiaCarrinho.push(produto);

  //   this.setState({carrinho: copiaCarrinho});
  // }
  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }
  
  render(){

    return (
      <div className='central'>
        <Filters/>
        <Main />
        {/* <Carrinho /> */}
        <Rodape/>
      </div>
    )
  }



}