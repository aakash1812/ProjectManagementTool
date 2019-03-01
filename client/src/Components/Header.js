import React from 'react';
import Logout from './Logout';

const Header = props => {
    return(
        <div className="Header">


                <div class="ui sizer vertical segment">
                <div class="ui huge header">{props.title}</div>
    
                
                <Logout />
            </div>
        </div>

    );
}

export default Header;