import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Counters from "./components/counters"
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <Counters />
//   );
// }

class App extends Component{
  render(){
    return(

      <>
        <h1>This is return of App.js</h1>
        <Counters />
      </>
    )
  }
}

export default App;
