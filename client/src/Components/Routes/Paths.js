import React from 'react';
import {Route} from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignInForm';
import RegistrationSuccess from '../RegistrationSuccess';
import Dashboard from '../Dashboard'
import { BrowserRouter, Redirect} from 'react-router-dom';
import AddTeamMember from '../RightPanel/AddTeamMember';

class Paths extends React.Component {


// jwtDecode = t => {
//     let token = {};
//     token.raw = t;
//     token.header = JSON.parse(window.atob(t.split('.')[0]));
//     token.payload = JSON.parse(window.atob(t.split('.')[1]));
//     return (token)
// }

// componentDidMount(){
//     let getToken = localStorage.getItem('user_jwtToken');
//     if (getToken === ""){
//         return <Redirect to = '/signin' / >
//     } else if(getToken !== ''){
//         let tokenDecoded = this.jwtDecode(getToken);
//         let tokenexp = tokenDecoded.payload.exp;
//         let currentTime = new Date().getTime();
//         if (tokenexp < currentTime/1000){
//             return <Redirect to = '/signin' / >
//         }
//     }

// }

render() {
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
}


export default Paths;


