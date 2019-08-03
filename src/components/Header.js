import React from "react"

function Header(props) {
    return (
        <div>
            <nav>
                Clicky Earth
                <span>Score {props.score}</span>
                <span>High Score: {props.highScore}</span>
                <span>{props.msg}</span>
            </nav>
        </div>
    )
}

export default Header