import React, {useState} from 'react'

function TwoSideBinding(params) {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className = 'input-container'>
            <input placeholder = 'Write here' type="text" name="input" id="input" value = {inputValue} onChange = {(event) => setInputValue(event.target.value)}/>
            <p className = 'data-container'>{ inputValue }</p>
        </div>
    )
}

export default TwoSideBinding