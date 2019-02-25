import React from 'react';
import AddTeamMember from './AddTeamMember';
import AddClient from './AddClient';

class RightPanel extends React.Component {

    constructor() {
        super();

        this.state = {
            showAddMember: false,
            showAddClient: false
        }
    }

    addMemberButton = () => {
        // window.location.href = '/dashboard/addteammember';

        //    return(
        //        <div>
        //            <AddTeamMember />
        //        </div>
        //    );
        this.setState({
            ...this.state,
            showAddMember: true,
            showAddClient: false
        });
    }


    addClient = () => {
        this.setState({
            ...this.state, 
            showAddClient : true,
            showAddMember:false
        });
    }

    render() {
        return (
            // <div className="RightPanel">
            //     <div>
            //         <AddTeamMember />
            //     </div>
            <div className="RightPanel">
                <div className="ui labeled icon menu">
                <a className="item" onClick={this.addMemberButton}>
                    <i class="user plus icon"></i>
                    Add Member
                </a>
                <a className="item">
                    <i className="users icon"></i>
                    Team
                </a>
                <a className="item" onClick={this.addClient}>
                    <i className="user plus icon"></i>
                    Add Client
                </a>
                <a className="item">
                    <i className="users icon"></i>
                    Clients
                </a>
                </div>
                <div>
                    {
                        this.state.showAddMember && <AddTeamMember />
                    }
                    {
                        this.state.showAddClient && <AddClient />
                    }
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default RightPanel;