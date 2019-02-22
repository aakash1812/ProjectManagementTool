import React from 'react';
import Logout from './Logout';

const Header = props => {
    return(
        <div className="Header">
            <div>
                {props.title}
                <Logout />
            </div>
        </div>

    );
}

export default Header;