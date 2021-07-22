import React from 'react'
import axios from 'axios'

class PostRequest extends React.Component {

    // correct value
    // "phone": "+19254223749",
    // "password": "123"

    state = {
        users: [],
        inputValueNumber: '',
        inputValuePassword: '',
    }

    onRequest () {
        axios.post('http://localhost:3001/auth/sign-in', {phone: this.state.inputValueNumber, password: this.state.inputValuePassword}).then((response) => {
            this.setState ({users : response})
        })
    }

    render() {
        return (
            <div>
                {!this.state.users.data ? 
                    <div className = 'auth-container'>
                        <input placeholder = 'Your telephone' type="tel" name="" id="tel" onChange={(event => { this.setState({inputValueNumber: event.target.value}) })}/>
                        <input placeholder = 'Your password' type="password" name="" id="pass" onChange={(event => {this.setState({inputValuePassword: event.target.value})})} />
                        <button onClick = {() => this.onRequest()}>Sign in</button>
                    </div> 
                : <p className = 'auth__user-email'>Вы авторизованы как <span style = {{fontStyle: 'italic'}}>{this.state.users.data.email}</span></p>
                }
            </div>
        )
    }
}

export default PostRequest