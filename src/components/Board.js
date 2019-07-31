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
        selected: []
    }

    setValue = (id) => {
        this.setState({
            points: this.state.points + 1
        })
    }

    clickSquare = (id) => {
        const value = this.state.icons.filter(value => value.id !== id)
        this.setState({
            value,
            score: this.state.score + 1,
            selected: this.value
        })
        randomize(this.state.icons)
        // this.pointCounter()
        // console.log(value)
        // console.log(this.state.icons)
        // console.log(this.state.iconsValue)
        console.log(this.state.selected)
    };
    render() {
        return (
            <div className="game">
                <Header score={this.state.score} />
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

// function switchValue(value) {

// }

function randomize(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    // console.log(array)
    return array;
}

export default Board;
