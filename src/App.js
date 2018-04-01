import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Knight from './Knight';
// import Square from './Square';
import Board from './Board';


class App extends Component {
  render() {
    return (
      <div style={{width: 400, height: 400}}>
        <Board knightPosition={[0, 1]} />
      </div>
      // <Square black>
      //   <Knight />
      // </Square>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
