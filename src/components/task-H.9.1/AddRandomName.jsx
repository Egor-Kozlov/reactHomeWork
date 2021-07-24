import React, {useState, useEffect} from 'react'
import arrOfNames from '../../names.json'

function AddRandomName(params) {

    const [names, setNames] = useState([])
    const [index, setIndex] = useState(3)

    let arr = []
    for (let index = 0; index < 3; index++) {
        const element = arrOfNames[index];
        arr.push(element)
    }

    useEffect(() => {
        setNames ((name) => name = arr)
    }, [])

    function addName(params) {
        setIndex ((index) => index + 1)
        arr = [...names, arrOfNames[index]]
        setNames ((name) => name = arr)
    }

    return (
        <div className = 'names-container'>
            {names.map( (name) => {
                return (
                <p className = 'data-container' key = {name}>{name}</p>
                )
            })}
            <button onClick = {() => addName()} type = 'button'>Add name</button>
        </div>
    )
}

export default AddRandomName