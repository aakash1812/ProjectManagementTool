import React from 'react';
import axios from 'axios';
import RenderTeamList from './RenderTeamList';

class ShowTeam extends React.Component {

    constructor(){
        super();
        this.state = {
            list : [], 
            renderAgain: false
        }
    }


    componentDidMount(){
        this.loadUserList();
    }


    loadUserList = () => {
        axios.get('http://localhost:5000/dashboard/teamlist')
        .then(response => {
          if (response.data !== '') {
              this.setState({...this.state, list : response.data});
          } 
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    render(){
        return(
            <div>
                <RenderTeamList reloadList={this.loadUserList} list={this.state.list} />
            </div>
        );
    }
}

export default ShowTeam;
