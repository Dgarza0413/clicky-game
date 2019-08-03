// our imports from react as well as the components in use
import React from 'react';
import Header from './Header'
import Square from './Square';
import icons from '../icons.json';

// we declare our class App react.component as our parent component
class Board extends React.Component {
    state = {
        icons,
        highScore: 0,
        score: 0,
        selected: [],
        msg: ""
    }

    randomize = () => {
        // we use the sort method to combare an a param and b param to return a positive 
        // number or negative number dictating placement of index
        this.state.icons.sort(() => 0.5 - Math.random())
    }

    matchScore = () => {
        // using short circuit operator &&
        this.state.score >= this.state.highScore && this.setState({ highScore: this.state.score + 1 })
    }

    clickSquare = id => {
        // includes determines string found within another string return true or false
        !this.state.selected.includes(id)
            ? this.setState({
                selected: this.state.selected.concat(id),
                score: this.state.score + 1,
                msg: ""
            })
            : this.setState({
                selected: [],
                score: 0,
                msg: "Game Over"
            })
        this.randomize()
        this.matchScore()
    };
    render() {
        return (
            <div className="game">
                <Header score={this.state.score}
                    highScore={this.state.highScore}
                    msg={this.state.msg} />
                <div className="game-board">
                    {this.state.icons.map(icon => (
                        <Square key={icon.id}
                            id={icon.id}
                            value={icon.value}
                            iconImage={icon.iconImage}
                            clickSquare={this.clickSquare}
                            randomize={this.randomize}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Board;
