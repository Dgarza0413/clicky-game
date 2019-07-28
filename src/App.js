// our imports from react as well as the components in use
import React from 'react';
// import Header from './components/Header'
import Board from './components/Board'
// import Square from './components/Square';

import './App.css';

// we declare our class App react.component as our parent component
class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
        </div>
      </div>
    )
  }
}

export default App;
