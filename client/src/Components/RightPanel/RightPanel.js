import React from 'react';
import AddTeamMember from './AddTeamMember';

class RightPanel extends React.Component {

    constructor() {
        super();

        this.state = {
            showAddMember: false,
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
            showAddMember: true
        });
    }

    render() {
        return (
            // <div className="RightPanel">
            //     <div>
            //         <AddTeamMember />
            //     </div>
            <div className = "RightPanel" >
                <div className = "ui labeled icon menu" >
                    <a className = "item" onClick = {this.addMemberButton}>
                        <i class = "user plus icon" > </i>Add Member 
                    </a> 
                    <a className="item">
                        <i className = "video camera icon" > </i>Channels
                    </a>
                    <a className = "item" >
                        <i className = "video play icon" > </i>Videos 
                    </a>
                </div>
                <div>
                    {
                        this.state.showAddMember && <AddTeamMember />
                    }
                </div>
            </div>
        );
    }
}

export default RightPanel;