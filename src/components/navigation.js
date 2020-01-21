import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component{

    render(){
        return(
            <div className='navbar is-dark'>
                <div className='navbar-item'>
                    <Link to='/'><h1>GAME ON</h1></Link>
                </div>
                <div class="navbar-end">
                    <div className='navbar-item'>
                        <button className='button is-info'>Logout</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navigation