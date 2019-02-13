import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';



class SignInForm extends Component {

    constructor() {

        super();

        this.state = {
            email: '',
            password: '',
            signinSuccess : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){

        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(e){
        e.preventDefault();


        axios.post('http://localhost:5000/signin', {
            email: this.state.email,
            password: this.state.password
          })
          .then(response => {
            if (response.data != null && response.status === 200) {
                this.setState({signinSuccess : true})
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        console.log("SignInForm was submitted with the following data");
        console.log(this.state);
    }



    setRedirect = () => {
        return <Redirect to='/dashboard' />
    }


    render () {
        if (this.state.signinSuccess){
            return this.setRedirect()
          }

        return (

            <div className="FormCenter">

            <div className="PageSwitcher">
              <Link exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</Link>
            </div>
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>


                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail Address</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your E-mail Address" name="email" value={this.state.email} onChange={this.handleChange}/>          
                </div>


                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>          
                </div>


                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button>
                  
                </div>

            </form> 

        </div>
        );
    }

}


export default SignInForm;