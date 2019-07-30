// our imports from react as well as the components in use
import React from 'react';
// import Header from './components/Header'
// import Board from './components/Board'
import Square from './components/Square';

import './App.css';
import icons from './icons.json';

// we declare our class App react.component as our parent component
class App extends React.Component {
  state = { icons }

  clickSquare = () => {
    (!this.state.value)
      ? this.setState({ value: true })
      : this.setState({ value: false })
    console.log(`the square was clicked to ${this.state.value}`)
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          {
            this.state.icons.map(i =>
              <Square
                iconImage={i.iconImage}
              />
            )
          }
        </div>
        <div className="game-info">
          <div></div>
        </div>
      </div>
    )
  }
}

export default App;
