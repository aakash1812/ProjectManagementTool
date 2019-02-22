import React from 'react';

class Logout extends React.Component {

    logout = () => {
        window.location.href = '/';
        localStorage.removeItem('user_jwtToken');
    }

    render(){
        return(
            <div className="Logout_button">
                <button className="ui primary button" type="button" onClick={this.logout}>
                    Logout
                </button>
            </div>
        );
    }
}


export default Logout;