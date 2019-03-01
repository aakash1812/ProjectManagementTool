import React from 'react';
import AddTeamMember from './AddTeamMember';
import axios from 'axios';
import ShowTeam from './ShowTeam';

class RenderTeamList extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
        console.log(this.props.renderAgain);
        this.state = {
            editUser: false, 
            renderList: true,
            userInfo : {
                id : '',
                name : '',
                email : '',
                expertise : ''
            }, 
        }
    }



    RenderTeamList1 = (props) => {
        const team = props.list.map(member => {
            member = JSON.parse(member);
               return(
                    <div>
                        <div class="ui big horizontal divided list" >
                            <div className="item" key={member._id.$oid}>
                                {/* <img class="ui avatar image" src="/public/images/1.jpg"/> */}
                                <div class="content">
                                    <div class="header">{member.name}</div>
                                    <div className="description">
                                            {member.email}
                                    </div>
                                    <div className="description">
                                            {member.expertise}
                                    </div>
                                </div>
                                    <div class="ui button" type="submit" onClick={()=>this.userEdit(member)}>Edit</div>
                                    <div class="ui button" type="submit" onClick={()=>this.userDelete(member)}>Delete</div>
                            </div>
                        </div>
                    </div>
                );
            });
        return(team);
    }
    
   

    userEdit = (member) => {
        this.setState({editUser : true, renderList: false, userInfo: member});
    }
    
    
    userDelete = (member) => {
        axios.post('http://localhost:5000/dashboard/deleteuser', {
            email : member.email
          })
          .then(response => {
             this.props.reloadList();
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({renderListAgain : true, userDel : member});  
        
    }


    render(){
        return(
            <div>
               
                {
                   this.RenderTeamList1(this.props)
                }
                {   
                    this.state.editUser && <AddTeamMember data={this.state.userInfo} isEdit={true}/>
                }
            </div>
        );
    }


}





export default RenderTeamList;



