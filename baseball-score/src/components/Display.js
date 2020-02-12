import React from 'react'

const Display = (props) => {
    return(
        <div>
            <h1>Strike: {props.strikes} </h1>
            <h1>Balls: {props.balls}</h1>
        </div>

    )
}

export default Display