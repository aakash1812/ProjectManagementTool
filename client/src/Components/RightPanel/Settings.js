import React from 'react';
import Header from '../Header';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from './RightPanel';
import SettingTab from './SettingTab';

class Settings extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }



    render(){
        return(
            <div>
                <Header title="User Setting Page"/>
                <LeftPanel />
                <SettingTab />
            </div>
        );
    }

}


export default Settings;