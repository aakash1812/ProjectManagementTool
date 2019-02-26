import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import Header from './Header';
import RightPanel from './RightPanel/RightPanel';
import axios from 'axios';


class Dashboard extends React.Component {

    constructor(){
        super();
        this.state = {
            username : '',
            user_token: ''
        }
    }

    componentDidMount() {
        
    }

    render(){
        return(
            <div>
                <Header title="Welcome to Dashboard" />
                <LeftPanel />
                <RightPanel />
                
            </div>
        );
    }
}

export default Dashboard;