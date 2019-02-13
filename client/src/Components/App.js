import React from 'react';
import '../Style/App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import RegistrationSuccess from './RegistrationSuccess';
import Dashboard from './Dashboard';


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

            {/* <div className="PageSwitcher">
              <Link exact to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</Link>
              <Link exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
            </div> */}

            {/* <div className="FormTitle">
              <Link exact to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</Link> or
              <Link exact to="/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</Link>
            </div> */}
            
            
            <Route exact path="/" in component={SignInForm}>  </Route>
            <Route exact path="/signup" in component={SignUpForm}>  </Route>
            <Route exact path="/signin" component={SignInForm}>  </Route>
            <Route exact path="/registrationSuccess" component={RegistrationSuccess}>  </Route>
            <Route exact path="/dashboard" component={Dashboard}>  </Route>

          </div> 
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
