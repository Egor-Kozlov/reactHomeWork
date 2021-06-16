import React from 'react';
import {ReactComponent as HelpIcon} from '../../img/icons/icon_help.svg'


function Card(props) {
    return (
        <section className='card'>
            <div className="card__header-container">
                <h3 className='card__header'>
                    Task {props.taskNumber}
                </h3>
                <div className="icon-help"><HelpIcon /></div>
            </div>
            <p className='card__description'>{props.condition}</p>
            <div className='card__solution'>{props.children}</div>
        </section>
    )
}

export default Card
