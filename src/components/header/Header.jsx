import React from 'react';
//import react logo
import {ReactComponent as ReactLogo} from '../../img/logo/react-icon.svg'

function Header(props) {
    return (
        <header className='header'>
            <h1 className='header__title'><span className='title__bulding'>homework</span><span className='title__your-acceptante'><span>On</span> React page</span></h1>
            <h2 className='header__subtitle'>Below is <span className='subtitle__this'>just</span> a very clever quote</h2>
            <p className='header__discription'>Spend some time reflecting on and absorbing the ideas that we are already good enough as we are - there's nothing that we have to do, no aim that has
            to be filled before we can be good enough.
            </p>
            <ReactLogo className='react-logo'/>
        </header>
    )
}

export default Header