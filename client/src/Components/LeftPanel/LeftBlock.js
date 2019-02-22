import React from 'react';
import '../../Style/App.css';

const Block = props => {
        return(
            <div className="LeftBlock">
                {props.title}
            </div>
        );
}

export default Block;