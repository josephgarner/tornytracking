import React, {Component} from 'react'

class Menu extends Component{

    render(){
        return(
            <div className='navbar is-dark'>
                <div className='navbar-item'>
                    <button className='button is-info'>Logout</button>
                </div>
            </div>
        )
    }
}

export default Menu