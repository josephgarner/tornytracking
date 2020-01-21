import React, {Component} from 'react'
import PlayerCard from './playercard'
import Navigation from './navigation'
import Menu from './menu'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Main extends Component{
    

    render(){
        return (
            <div>
                <Navigation/>
                <div className="columns is-fullheight">
                    <Menu/>
                    <div className="column is-main-content">
                        <PlayerCard/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main