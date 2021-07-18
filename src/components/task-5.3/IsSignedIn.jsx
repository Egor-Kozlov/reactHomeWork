import React from 'react'

class IsSignedIn extends React.Component {

    state = {
        isSigned: false
    }

    onShowUserAuthorization = () => {
        this.setState ( {isSigned: true} )
    }

    render() {
        return (
            this.state.isSigned ? <p className = 'text-hello-user'>Hello user</p> :
            <button onClick = { () => setTimeout(this.onShowUserAuthorization, 3000) }>"Sign In"</button> 
        )
    }
}

export default IsSignedIn

