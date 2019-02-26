import React from 'react';
import axios from 'axios';
import RenderTeamList from './RenderTeamList';

class ShowTeam extends React.Component {

    constructor(){
        super();
        
        this.state = {
            list : []
        }
    }

    componentDidMount(){
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
                <RenderTeamList list={this.state.list} />
            </div>
        );
    }


}

export default ShowTeam;
