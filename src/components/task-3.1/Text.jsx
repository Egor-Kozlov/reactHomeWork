import React from 'react'

function Text(props) {
    return (
            <p className = 'text' style = {{color: props.textColor, 
                fontSize: props.textSize + 'px', 
                textDecoration: props.textDecoration ? 'underline' : 'none'}}>{props.text}
            </p>  
    )
}

export default Text