import React from 'react';
import '../../Style/App.css';
import LeftBlock from './LeftBlock';


class LeftPanel extends React.Component {
    render() {
        return(
            <div className="LeftPanel">
                <LeftBlock title="My DashBoard" />
                <LeftBlock title="My Profile" />
                <LeftBlock title="Settings" />
            </div>
        );
    }
}

export default LeftPanel;