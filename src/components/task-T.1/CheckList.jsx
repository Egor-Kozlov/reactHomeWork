import React, {useState} from 'react'

function CheckList (props) {

    const obj = {
        'Cheese': false,
        'Ham': false,
        'Mushrooms': false,
        'Pepper': false,
        'Cucumbers': false,
        'Tomatoes': false,
        'Olives': false,
        'Pepperoni': false,
        'Pineapples': false,
        'Bacon': false,
        'Chicken': false,
    }

    const [numberOfIngredients, setNumberOfIngredients] = useState(obj)
    const [overabundance, setOverabundance] = useState(false)
  
    function isOversupply(newState) {
        let counterTrueValues = 0
        for (const key in newState) {
            if (Object.hasOwnProperty.call(newState, key)) {
                const element = newState[key];
                if (element) {
                    counterTrueValues++
                } 
            }
        }

        if (counterTrueValues > 4) {
            setOverabundance({overabundance: true})
        } else setOverabundance({overabundance: false})
    }

    function onCheckbox(params) {

        const newState = {
            ...numberOfIngredients
        }
        newState[params] = !numberOfIngredients[params]
        setNumberOfIngredients ( newState )

        isOversupply( newState )
    }

    return (
        <div className = 'checkList-container'>
            <div className = "checkList-header" style = {{background: overabundance.overabundance ? 'rgb(185, 22, 0)' : ''}}>Конкструктор пиццы 🍕</div>
            <div className = "checkList-title">Выберите 5 ингредиентов:</div>
            <div className = 'checkList-alert'>{overabundance.overabundance ? 'У вас выбрано максимальное количество ингредиентов' : ''}</div>
            <div className = "checkList">
                <ul>
                    {Object.keys(obj).map(item => {
                        return (
                            <li className = 'list-item' key = {item}>
                                <label  className = 'check option'>
                                <input disabled = {(overabundance.overabundance && !numberOfIngredients[item] )? true : false} onClick = {() => onCheckbox(item)}  className = 'check__input' type="checkbox" name="checkbox" id="cheese" />
                            {item}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CheckList