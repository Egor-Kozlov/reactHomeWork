import React from 'react'

function Counter (props) {

    return (
        <div className = 'counter-container'>
            <button className = 'button-plus' onClick = {() => props.functionPlus()}>Plus</button>
                <p className = 'counter'>{props.counter}</p>
            <button className = 'button-minus' onClick = {() => props.functionMinus()}>Minus</button>
        </div>
    )
    
}


export default Counter