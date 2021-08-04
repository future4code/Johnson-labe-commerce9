import React from 'react';
import Main from './component/Main';
import './App.css';
import Carrinho from './component/Carrinho';
import Filtro from './component/Filtro';

export default class App extends React.Component{
  render()
  {
    return (
      <div className='central'>
        <Filtro/>
        <Main/>
        <Carrinho/>

      </div>
    )
  }



}