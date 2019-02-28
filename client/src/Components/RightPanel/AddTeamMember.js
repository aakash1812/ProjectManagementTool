import React from 'react';
import axios from 'axios';


class AddTeamMember extends React.Component {

    constructor(props){
        super(props);
        
           this.state = {
                name : '',
                email : '',
                expertise : '',
                memberAdded : false,
            }
        
        // else if (this.props !== ''){
        //     let data = this.props.data;
        //     console.log(data);
        //     this.state = {
        //         name: data.name,
        //         email: data.email,
        //         expertise: data.expertise,
        //         memberAdded: false
        //     }
        // }

        
    }



    componentDidMount() {
        
        if (this.props.isEdit === true){
            console.log(this.state);
            let info = this.props.data;
            this.setState({
                name : "info.name",
                email : "info.email",
                expertise : "info.expertise"
            });
            console.log(this.state);
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
     
        axios.post('http://localhost:5000/dashboard/addTeamMembers', {
          name: this.state.name,
          email: this.state.email,
          expertise: this.state.expertise
        })
        .then(response => {
          if (response.data === 'Success') {
              this.setState({memberAdded : true});
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
                Member Successfully Added 
            </div>
        );
    }

    render(){
        return(
            <div className="AddNewMember">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>E-mail Address</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="field">
                        <label>Expertise</label>
                        <input type="text" name="expertise" placeholder="Expertise" value={this.state.expertise} onChange={this.handleChange}/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
          
           {this.successMessage}
            </div>
        );
    }
}

export default AddTeamMember;