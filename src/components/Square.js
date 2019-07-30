import React from "react"

function Square(props) {
    return (
        <div>
            {props.icons.map(icon => (
                <div className="square">
                    <img alt="" src={icon.iconImage} />
                    <p>value: {icon.test}</p>
                </div>
            ))}
        </div>
    )
}


export default Square;