import React, {Component} from 'react'

class Menu extends Component{

    render(){
        return (
            <div className="column is-2 is-sidebar-menu is-hidden-mobile">
                <aside class="menu">
                    <p className="menu-label">Hello World</p>
                </aside>
            </div>
        )
    }
}

export default Menu