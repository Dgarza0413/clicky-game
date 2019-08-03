import React from "react";

function Square(props) {
    return (
        <div>
            <div className="square" key={props.id} onClick={() => props.clickSquare(props.id)}>
                <img alt="" src={props.iconImage} />
            </div>
        </div>
    )
}


export default Square;