import React from 'react';
import {Route} from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignInForm';
import RegistrationSuccess from '../RegistrationSuccess';
import Dashboard from '../Dashboard'
import { BrowserRouter} from 'react-router-dom';
import AddTeamMember from '../RightPanel/AddTeamMember';

const Paths = () => {
    return(
            <BrowserRouter>
                <div className="Clear">
                    <div className="App__Form">     
                        <Route exact path="/signup" component={SignUpForm}>  </Route>
                        <Route exact path="/signin" component={SignInForm}>  </Route>
                        <Route exact path="/" component={SignInForm}>  </Route>
                        <Route exact path="/registrationSuccess" component={RegistrationSuccess}>  </Route>
                    {/* </div>
                    <div className="DashBoard"> */}
                        <Route exact path="/dashboard" component={Dashboard}>  </Route>
                        <Route exact path="/dashboard/addteammember" component={AddTeamMember}>  </Route>
                    </div>
                </div>
            </BrowserRouter>
    );
}

export default Paths;


