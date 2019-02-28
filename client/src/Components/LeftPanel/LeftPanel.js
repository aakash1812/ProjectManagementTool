import React from 'react';
import '../../Style/App.css';
import LeftBlock from './LeftBlock';
import { Redirect, withRouter } from 'react-router-dom';




class LeftPanel extends React.Component {

    constructor(){
        super();
        this.state={}
    }

    mySettings() {
        console.log("My Settings");
        this.props.history.push('/settings');
    }

    render() {
        return(
            <div className="LeftPanel">
                <button>
                        <h2 class="ui icon header">
                            <i class="settings icon"></i>
                            <div class="content">
                                Dashboard
                            </div>
                        </h2>
                </button> 
                <button>
                    <h2 class="ui icon header">
                        <i class="settings icon"></i>
                        <div class="content">
                            My Profile
                        </div>
                    </h2>
                </button>
                <button onClick={this.mySettings.bind(this)}>
                    <h1 class="ui icon header">
                        <i class="settings icon"></i>
                        <div class="content">
                            Settings
                        </div>
                    </h1>
                </button>
            </div>
        );
    }
}

export default withRouter(LeftPanel);