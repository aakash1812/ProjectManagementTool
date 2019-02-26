import React from 'react';
import AddTeamMember from './AddTeamMember';
import AddClient from './AddClient';
import ShowTeam from './ShowTeam';
import ShowClients from './ShowClients';

class RightPanel extends React.Component {

    constructor() {
        super();

        this.state = {
            showAddMember: false,
            showAddClient: false,
            showTeam : false,
            showClient : false
        }
    }

    addMemberButton = () => {
        this.setState({
            showAddMember: true,
            showAddClient: false,
            showTeam : false,
            showClient : false
        });
    }


    addClient = () => {
        this.setState({
            showAddMember:false,
            showAddClient : true,
            showTeam : false,
            showClient : false
        });
    }

    teamList = () => {
        this.setState({
            showAddClient : false,
            showAddMember:false,
            showTeam : true,
            showClient : false
        });
    }

    clientList = () => {
        this.setState({
            showAddClient : false,
            showAddMember:false,
            showTeam : false,
            showClient : true
        });
    }


    render() {
        return (
            <div className="RightPanel">
                <div className="ui labeled icon menu">
                <a className="item" onClick={this.addMemberButton}>
                    <i class="user plus icon"></i>
                    Add Member
                </a>
                <a className="item" onClick={this.teamList}>
                    <i className="users icon"></i>
                    Team
                </a>
                <a className="item" onClick={this.addClient}>
                    <i className="user plus icon"></i>
                    Add Client
                </a>
                <a className="item" onClick={this.clientList}>
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
                    {
                        this.state.showTeam && <ShowTeam />
                    }
                    {
                        this.state.showClient && <ShowClients />
                    }
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default RightPanel;