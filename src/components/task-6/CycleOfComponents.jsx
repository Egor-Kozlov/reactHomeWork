import React from 'react'
import data from '../../data.json'

class CycleOfComponents extends React.Component {

    render() {
        return (
            <div>
                {data.map( (element) => {
                    return (
                    <div key = {10 * Math.random() } className = 'data-container'>
                        <h3 key = {10 * Math.random() * Math.random()}>{element.name.first}</h3>
                        <h4 key = {10 * Math.random() * Math.random()}>{element.name.last}</h4>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default CycleOfComponents