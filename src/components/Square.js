import React from "react"

function Square(props) {


    return (
        <div className="square" onClick={() => props.clickSquare()}>
            <img alt="" src={props.iconImage} />
        </div>
    )
}

export default Square