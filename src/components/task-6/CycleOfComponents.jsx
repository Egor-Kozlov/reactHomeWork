import React from 'react'
import data from '../../data.json'

class CycleOfComponents extends React.Component {

    render() {
        return (
            <div>
                {data.map( (element) => {
                    return (
                    <div className = 'data-container'>
                        <h3>{element.name.first}</h3>
                        <h4>{element.name.last}</h4>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default CycleOfComponents