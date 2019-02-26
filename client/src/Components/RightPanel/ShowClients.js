import React from 'react';
import axios from 'axios';
import RenderClientList from './RenderClientList';

class ShowClients extends React.Component {

    constructor(){
        super();
        
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/dashboard/clientlist')
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
                <RenderClientList list={this.state.list} />
            </div>
        );
    }


}

export default ShowClients;