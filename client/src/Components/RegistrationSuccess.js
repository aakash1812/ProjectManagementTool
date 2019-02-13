import React from 'react';
import {Link} from 'react-router-dom';
 const RegistrationSuccess = () => {
     return(
        <div>
            <div>
                <h1>Welcome to Employee Management Tool</h1>
            </div>
            <div className="FormTitle">
                <Link exact to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</Link>
            </div> 
        </div>
     );
 }

export default RegistrationSuccess;