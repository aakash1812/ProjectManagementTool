import React from 'react';

class SettingTab extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div className="RightPanel">
               <div class="ui two item menu">
                    <a class="item">Change Password</a>
                    <a class="item">Add Contact</a>
                </div>
                <div className="ChangePass">
                <form class="ui form">
                    <div class="field">
                        <label>Old Password</label>
                        <input type="text" name="first-name" placeholder="Old Password"></input>
                    </div>
                    <div class="field">
                        <label>New Password</label>
                        <input type="text" name="last-name" placeholder="New Password"></input>
                    </div>
                    <div class="field">
                        <label>Re-enter New Password</label>
                        <input type="text" name="last-name" placeholder="Re-enter New Password"></input>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
                </div>
            </div> 
        );
    }
}

export default SettingTab ;