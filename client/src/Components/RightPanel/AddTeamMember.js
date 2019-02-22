import React from 'react';

class AddTeamMember extends React.Component {

    onSubmit = () => {
        
    }

    render(){
        return(
            <div className="AddNewMember">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name"/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTeamMember;