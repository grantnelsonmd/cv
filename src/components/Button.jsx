import React from "react";

function Button(props){
    let buttonName = props.name;

    return(
        <div id="link-container">
            <button onClick={() => {
            props.handleClick(props);
            }}>
            <strong>{buttonName}</strong>
            </button>
        </div>
    )
};

export default Button;