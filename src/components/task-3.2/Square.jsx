import React from 'react'

function Square(props) {
    return (
        <div className={`square ${props.cssClass}`}>
            <p className='square__text'>{props.label}</p>
        </div>
    )
}

export default Square