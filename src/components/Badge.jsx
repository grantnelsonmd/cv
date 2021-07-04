import React from "react";

function Badge(props){
    let skillName = props.skill;
    return(
        <div className="badge">
            {skillName}
        </div>
    )};

export default Badge;