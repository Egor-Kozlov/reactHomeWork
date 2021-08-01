import React, { useEffect, useState } from 'react'

function TimePicker() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        if (hours > 23) {
            setHours(0)
        }
        if (hours < 0) {
            setHours(23)
        }
        if (minutes > 59) {
            setMinutes(0)
            setHours(hours + 1)
        }
        if (minutes < 0) {
            setHours(hours - 1)
            setMinutes(59)
        }
    }, [hours, minutes])

    return (
        <div className='time-picker-container'>
            <div className="counter">
                <span className='counter__item'>{hours < 10 ? `0${hours}` : hours}</span> : 
                <span className='counter__item'>{minutes < 10 ? `0${minutes}` : minutes}</span>
            </div>
            <div className="buttons-container">
                <div className="buttons-hours">
                    <button onClick = {() => setHours(hours - 1)}>-</button>
                    <button onClick = {() => setHours(hours + 1)}>+</button>
                </div>
                <div className="buttons-minutes">
                    <button onClick = {() => setMinutes(minutes - 1)}>-</button>
                    <button onClick = {() => setMinutes(minutes + 1)}>+</button>
                </div>
            </div> 
        </div>
    )
}

export default TimePicker