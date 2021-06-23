import React from 'react';
import {ReactComponent as HelpIcon} from '../../img/icons/icon_help.svg'
class Card extends React.Component {
    
    render () {
    return (
        <section className='card'>
            <div className="card__header-container">
                <h3 className='card__header'>
                    Task {this.props.taskNumber}
                </h3>
                <div className="icon-help" data-tip data-for={this.props.condition}>
                    <HelpIcon />
                </div> 
            </div>
            <div className='card__solution'>{this.props.children}</div>
        </section>
    )
    }
}

export default Card
