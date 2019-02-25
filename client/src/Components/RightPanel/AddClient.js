import React from 'react';
import axios from 'axios';


class AddClient extends React.Component {

    constructor(){
        super();

        this.state = {
            name: '',
            email:'',
            expertise: '', 
            clientAdded: false
        }
    }


    handleChange = e => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({[name]: value});
    }



    onSubmit = (e) => {
        e.preventDefault();
     
        axios.post('http://localhost:5000/dashboard/addClient', {
          name: this.state.name,
          email: this.state.email,
          technology: this.state.technology,
          resources: this.state.resources,
          description: this.state.description
        })
        .then(response => {
          if (response.data === 'Success') {
              this.setState({clientAdded : true});
          } 
        //   else if (response.data === 'User already exists'){
        //     let cred = this.state.formErrors;
        //     cred.credentials = 'Email-Id already exists';
        //     this.setState({formErrors : cred});
        //   }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    successMessage (){
        return(
            <div>
                Client Successfully Added 
            </div>
        );
    }

    render(){
        return(
            <div className="AddClientMember">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Client's Name</label>
                        <input type="text" name="name" placeholder="Client's Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>E-mail Address</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>Requirement</label>
                        <input type="text" name="technology" placeholder="Technology Requirement" value={this.state.technology} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>Number of Resources required</label>
                        <input type="text" name="resources" placeholder="Resources" value={this.state.resources} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>Brief Summary of Project</label>
                        <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
                {this.successMessage}
            </div>
        );
    }
}

export default AddClient;