import React, {useState} from 'react'

function TwoSideBinding(params) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className = 'input-container'>
            <input type="text" name="input" id="input" value = {inputValue} onChange = {(event) => setInputValue(event.target.value)}/>
            <p>{ inputValue }</p>
        </div>
    )
}

export default TwoSideBinding