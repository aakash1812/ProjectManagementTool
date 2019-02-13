import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SignInForm extends Component {

    constructor() {

        super();

        this.state = {
            email: '',
            password: ''
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
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


        console.log("SignInForm was submitted with the following data");
        console.log(this.state);
    }

    render () {
        return (

            <div className="FormCenter">

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