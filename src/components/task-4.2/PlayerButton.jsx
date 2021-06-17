import React from 'react'

class PlayerButton extends React.Component {
    
    state = {
        buttonStatus: 'repeat-all' 
    }

    onChangeButtonStatus = () => {
        this.setState ( { buttonStatus: this.state.buttonStatus === 'repeat-all' ? 'repeat-one' :
                                        this.state.buttonStatus === 'repeat-one' ? 'random' : 'repeat-all' } )
    }

    render() {
        return (
            <div className = 'player-button' onClick = { () => this.onChangeButtonStatus () }> 
            {   this.state.buttonStatus === 'repeat-all' ? '🔁' :
                this.state.buttonStatus === 'repeat-one' ? '🔂' :
                '🔀'
            } 
            </div>
        )
    }
}


export default PlayerButton