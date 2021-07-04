import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Counters from "./components/counters"


class App extends Component{
  render(){
    return(

      <>
        <h1>This is return of App.js</h1>
        <h1>Hello</h1>
        <Counters />
      </>
    )
  }
}

export default App;
