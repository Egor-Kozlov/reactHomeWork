import React, {useState, useEffect} from 'react'
import arrOfNames from '../../names.json'

function AddRandomName(params) {

    const [names, setNames] = useState([])

    let arr = []
    for (let index = 0; index < 3; index++) {
        const element = arrOfNames[Math.floor(Math.random() * 13)];
        arr.push(element)
    }

    useEffect(() => {
        setNames ((name) => name = arr)
    }, [])

    function addName(params) {
        arr = [...names, arrOfNames[Math.floor(Math.random() * 13)]]
        setNames ((name) => name = arr)
    }

    return (
        <div className = 'names-container' key = {arrOfNames[0]}>
            {names.map( (name) => {
                return (
                <p className = 'data-container'>{name}</p>
                )
            })}
            <button onClick = {() => addName()} type = 'button'>Add name</button>
        </div>
    )
}

export default AddRandomName