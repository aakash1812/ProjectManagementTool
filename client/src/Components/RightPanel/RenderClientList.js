import React from 'react';

const RenderClientList = (props) => {
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
                                {member.description}
                        </div>
                    </div>
                        <div class="ui button">Edit</div>
                        <div class="ui button">Delete</div>
                </div>
            </div>
        </div>
        );
    });
    return(team);
}

export default RenderClientList;



