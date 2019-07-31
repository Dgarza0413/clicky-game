import React from "react";

function Square(props) {
    return (
        <div>
            {/* {props.icons.map(icon => ( */}
            <div className="square" key={props.id} onClick={() => props.clickSquare(props.id)}>
                <img alt="" src={props.iconImage} />
                <p>value: {props.value ? "True" : "false"}</p>
            </div>
            {/* ))} */}
        </div>
    )
}


export default Square;