import React, {Component} from 'react'
import PlayerCard from './playercard'
import Menu from './menu'

class Main extends Component{
    

    render(){
        return (
            <div className="hero is-fullheight">
                <Menu/>
                <div className='hero-body'>
                    <PlayerCard/>
                    
                </div>
                
            </div>
        )
    }
}


export default Main