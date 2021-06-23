import React from 'react'
class IsSignedIn extends React.Component {

    state = {
        isSigned: false
    }

    render() {
        return (
            this.state.isSigned ? "Hello user" :
            <button onClick = { () => this.setState ( {isSigned: true} )  }>"Sign In"</button> 
        )
    }
}

export default IsSignedIn

