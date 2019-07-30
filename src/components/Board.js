// our imports from react as well as the components in use
import React from 'react';
import Header from './Header'
import Square from './Square';
import icons from '../icons.json';

// we declare our class App react.component as our parent component
class Board extends React.Component {
    state = { icons }

    clickSquare = () => {
        (!this.state.value)
            ? this.setState({
                value: true,
                test: "on"
            })
            : this.setState({
                value: false,
                test: "off"
            })
        //i have to target the specific id to change the items boolean
    }

    randomize = () => {
        const x = this.state.icons.length
        for (let i = x.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]]
            console.log([x])
        }
        console.log(x)
        return x;
    }

    render() {
        return (
            <div className="game">
                <Header />
                <div className="game-board">
                    <Square icons={this.state.icons} />
                </div>
            </div>
        )
    }
}

export default Board;
