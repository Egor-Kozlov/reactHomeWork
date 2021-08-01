import React, {useState} from 'react'

function TwoSideBinding(params) {

    const [inputValue, setInputValue] = useState('')

    function onClearInput(params) {
        setInputValue('')
    }

    return (
        <div className = 'input-container' style = { { display: 'flex', flexDirection: 'column' } }>
            <input placeholder = 'Write here' type="text" name="input" id="input" value = {inputValue} onChange = {(event) => setInputValue(event.target.value)}/>
            <p className = 'data-container'>{ inputValue }</p>
            <button type="reset" onClick = {() => onClearInput()}>Clear imput</button>
        </div>
    )
}

export default TwoSideBinding