import React from 'react';
import AddTeamMember from './AddTeamMember';

// const RenderTeamList1 = (props) => {
//     const team = props.list.map(member => {
//         member = JSON.parse(member);
//            return(
//         <div>
//             <div class="ui big horizontal divided list" >
//                 <div className="item" key={member.id}>
//                     {/* <img class="ui avatar image" src="/public/images/1.jpg"/> */}
//                     <div class="content">
//                         <div class="header">{member.name}</div>
//                         <div className="description">
//                                 {member.email}
//                         </div>
//                         <div className="description">
//                                 {member.expertise}
//                         </div>
//                     </div>
//                         <div class="ui button" type="submit" onClick={this.userEdit}>Edit</div>
//                         <div class="ui button" type="submit" onClick={this.userDelete}>Delete</div>
//                 </div>
//             </div>
//         </div>
//         );
//     });
//     return(team);
// }

// userEdit() {

// }

// userDelete() {

// }




class RenderTeamList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editUser: false, 
            renderList: true,
            userInfo : {
                id : 'A',
                name : 'A',
                email : 'A',
                expertise : 'A'
            }
        }
    }



    RenderTeamList1 = (props) => {
        const team = props.list.map(member => {
            member = JSON.parse(member);
               return(
                    <div>
                        <div class="ui big horizontal divided list" >
                            <div className="item" key={member.id}>
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
                                    <div class="ui button" type="submit" onClick={this.userEdit}>Edit</div>
                                    <div class="ui button" type="submit" onClick={this.userDelete}>Delete</div>
                            </div>
                            {/* {
                                this.setState({id: member.id, name: member.name, email: member.email, expertise: member.expertise})
                            } */}
                        </div>
                    </div>
                );
            });
        return(team);
    }
    


    userEdit = () => {
        console.log("Edit user");
        let check = {name: "A", email: 'a@a.com', expertise: 'exp'};
        console.log(check);
        this.setState({editUser : true, renderList: false});
    }
    
    userDelete() {
    
    }



    render(){
        return(
            <div>
                {
                    this.state.renderList && this.RenderTeamList1(this.props)
                }
                {   
                    this.state.editUser && <AddTeamMember data={this.state.userInfo}/>
                }
            </div>
        );
    }


}





export default RenderTeamList;



