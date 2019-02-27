// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';



// class SignInForm extends Component {

//     constructor() {

//         super();

//         this.state = {
//             email: '',
//             password: '',
//             signinSuccess : false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     handleChange(e){

//         let target = e.target;
//         let value = target.value;
//         let name = target.name;

//         this.setState({
//             [name]: value
//         });

//     }

//     handleSubmit(e){
//         e.preventDefault();


//         axios.post('http://localhost:5000/signin', {
//             email: this.state.email,
//             password: this.state.password
//           })
//           .then(response => {
//               const token = response.data;
//             if (token != null && response.status === 200) {
//                 this.setState({signinSuccess : true});
//                 localStorage.setItem('user_jwtToken', token);
//             }
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
        

//         console.log("SignInForm was submitted with the following data");
//         console.log(this.state);
//     }



//     setRedirect = () => {
//         return <Redirect to='/dashboard' />
//     }


//     render () {
//         if (this.state.signinSuccess){
//             return this.setRedirect()
//           }

//         return (
            
//             <div className="FormCenter">

//             <div className="PageSwitcher">
//               <Link exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
//             </div>
//             <form className="FormFields" onSubmit={this.handleSubmit}>


//                 <div className="FormField">
//                   <label className="FormField__Label" htmlFor="email">E-mail Address</label>
//                   <input type="text" id="name" className="FormField__Input" placeholder="Enter your E-mail Address" name="email" value={this.state.email} onChange={this.handleChange}/>          
//                 </div>


//                 <div className="FormField">
//                   <label className="FormField__Label" htmlFor="password">Password</label>
//                   <input type="text" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>          
//                 </div>


//                 <div className="FormField">
//                   <button className="FormField__Button mr-20">Sign In</button>
                  
//                 </div>

//             </form> 

//         </div>
//         );
//     }

// }


// export default SignInForm;





// ######################################################################################################





import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import FormErrors from './FormErrors';




class SignInForm extends React.Component {

    constructor() {

        super();

        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: '', credentials: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            inValidCredentials: false,
            signinSuccess : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {         
          case 'email':
            emailValid = value.length > 0;
            fieldValidationErrors.email = emailValid ? '' : '*Email Cannot Be Blank';
            break;
          case 'password':
            passwordValid = value.length > 0;
            fieldValidationErrors.password = passwordValid ? '': '*Password Cannot Be Blank';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }



    handleChange(e){
        let remove_cred = this.state.formErrors;
        remove_cred.credentials = "";
        this.setState({ formErrors: remove_cred});
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({[name]: value}, () => { this.validateField(name, value) });

    }

    handleSubmit(e){
        e.preventDefault();


        axios.post('http://localhost:5000/signin', {
            email: this.state.email,
            password: this.state.password
          })
          .then(response => {
              console.log(response);
              const token = response.data;
            if (token === "Invalid Credentials"){
                let cred = this.state.formErrors;
                cred.credentials = "*Invalid Credentials";
                this.setState({formErrors : cred});
            } else if (token !== "Invalid Credentials" && response.status === 200) {
                this.setState({signinSuccess : true});
                localStorage.setItem('user_jwtToken', token);
            }
          })
          .catch(function (error) {
            console.log(error);
          });

    }



    setRedirect = () => {
        return <Redirect to='/dashboard' />;
    }


    render () {
        if (this.state.signinSuccess){
            return this.setRedirect();
          }

        return (
            
            <div className="FormCenter">

            <div className="PageSwitcher">
              <Link exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
            </div>
            <form className="FormFields" onSubmit={this.handleSubmit}>


                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your E-mail Address" name="email" value={this.state.email} onChange={this.handleChange}/>          
                </div>


                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>          
                </div>

                <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors} /> </div>


                {/* <span>{ if (this.state.inValidCredentials) {
                     <div className="panel panel-default"><FormErrors formErrors="Invalid Credentials" /> </div>
                }}</span> */}

                <div className="FormField">
                  <button className="FormField__Button mr-20" disabled={!this.state.formValid} >Sign In</button>
                  
                </div>

            </form> 

        </div>
        );
    }

}


export default SignInForm;