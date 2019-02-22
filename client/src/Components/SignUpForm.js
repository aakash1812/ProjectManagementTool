import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import FormErrors from './FormErrors';



class SignUpForm extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            password: '',
            email: '',
            team_role: 'admin',
            formErrors: {name: '', email: '', password: '', credentials: ''},
            emailValid: false,
            passwordValid: false,
            nameValid:false,
            formValid: false,
            signupSuccess: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'name':
            nameValid = value.length >= 1;
            fieldValidationErrors.name = nameValid ? '': '*Name Too Short';
            break;          
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : '*Invalid Email';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': '*Password Too Short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid});
      }
      


      setRedirect = () => {
          return <Redirect to='/registrationSuccess' />
      }




    handleChange(e){
        let user_exists_cred = this.state.formErrors;
        user_exists_cred.credentials = '';
        this.setState({formErrors : user_exists_cred});
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({[name]: value}, () => { this.validateField(name, value) });

    }

    handleSubmit(e){
        e.preventDefault();
     
          axios.post('http://localhost:5000/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            team_role : this.state.team_role
          })
          .then(response => {
        
            if (response.data === 'Success') {
                this.setState({signupSuccess : true});
            } else if (response.data === 'User already exists'){
              let cred = this.state.formErrors;
              cred.credentials = 'Email-Id already exists';
              this.setState({formErrors : cred});
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


      errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

    render() {
      if (this.state.signupSuccess){
        return this.setRedirect()
      }

        return (

            <div className="FormCenter">



            <div className="PageSwitcher">
              <Link exact to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</Link>
            </div>


                <form onSubmit={this.handleSubmit} className="FormFields">


           



                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="name">Full Name</label>
                      <input type="text" id="name" className="FormField__Input" placeholder="Enter your Full Name" name="name" value={this.state.name} onChange={this.handleChange}/>          
                      {/* <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors.name} /> </div> */}
                    </div>

                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="password">Password</label>
                      <input type="text" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                      {/* <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors.password} /> </div> */}
                    </div>

                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                      <input type="text" id="email" className="FormField__Input" placeholder="Enter your E-mail Address" name="email" value={this.state.email} onChange={this.handleChange}/>
                      {/* <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors.email} /> </div> */}
                    </div>

                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="team_role">Sign Up As</label>
                      {/* <input type="text" id="team_role" className="FormField__Input" placeholder="Enter your Functional Role" name="team_role" value={this.state.team_role} onChange={this.handleChange}/> */}
                      <select id="team_role" name="team_role" value={this.state.team_role} onChange={this.handleChange}>
                            <option value="admin">Admin</option>
                            <option value="team_member">Team Member</option>
                        </select>
                    </div>

                                       
                         <div className="panel panel-default"><FormErrors formErrors={this.state.formErrors} /> </div>

                  

                    {/* <div className="FormField">
                      <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all statements in  
                          <a href="" className="FormField__TermsLink"> terms of service</a>   
                      </label>
                    </div> */}

                    <div className="FormField">
                      <button className="FormField__Button mr-20"  disabled={!this.state.formValid} onSubmit={this.onSubmit}>Sign Up</button>
                      {/* <Link to="/signin" className="FormField__Link">I'm already a member</Link> */}
                    </div>

                </form> 

            </div>

        );
    }
} 



export default SignUpForm;