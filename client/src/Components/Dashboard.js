import React from 'react';
import LeftPanel from './LeftPanel/LeftPanel';
import Header from './Header';
import RightPanel from './RightPanel/RightPanel';


class Dashboard extends React.Component {

    constructor(){
        super();
        this.state = {
            username : ''
        }
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