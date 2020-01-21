import React, {Component} from 'react'

class PlayerCard extends Component{

    render(){
        return(
            <div className='card player-Card'>
                <div className='card-header'>
                    <p className='cardTitle'>[Player Name]</p>
                </div>
            </div>
        )
    }
}

export default PlayerCard