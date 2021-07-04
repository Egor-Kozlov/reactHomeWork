import React from 'react'

class IsSignedIn extends React.Component {

    state = {
        isSigned: false
    }

    render() {
        return (
            this.state.isSigned ? <p className = 'text-hello-user'>Hello user</p> :
            <button onClick = { () => this.setState ( {isSigned: true} )  }>"Sign In"</button> 
        )
    }
}

export default IsSignedIn

