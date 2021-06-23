import React from 'react'

class Loader extends React.Component {
    
    state = {
        isShowLoader: false,
        isShowGretting: false
    }

    onButtonClickTimer = () => {
        //скорее всего, слишком запутано, но это для реализации кнопки сброса всех состояний
        this.state.isShowGretting ? 
        this.setState( {isShowGretting: false, isShowLoader: false} ) :
        this.setState( {isShowLoader: !this.state.isShowLoader} )
        setTimeout( () => {
            this.setState( {isShowGretting: !this.state.isShowGretting, isShowLoader: false} )
        }, 3000);

    }

    render () {
        return (
            <div>
                <button className = 'loader-button' onClick = { () =>  this.onButtonClickTimer() }>
                    {!this.state.isShowGretting && !this.state.isShowLoader ? 'Сказать привет' : 'Сброс'}
                </button>
                {this.state.isShowLoader && <div className = 'loader'></div>}
                {this.state.isShowGretting && <p>Привет!</p>}
            </div>
        )
    }
}


export default Loader