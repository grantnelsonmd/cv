import React from "react";
import Button from "./Button";

function Links(props){

    function buttonClicked(click){
        props.handleClick(click.name);
    }

    return(
        <div className="container" id="link-container">
            <div className="row">
                <div className="col-12">
                    <p><Button handleClick={buttonClicked} name="PROJECTS" /></p>
                    <p><Button handleClick={buttonClicked} name="ABOUT" /></p>
                    <p><Button handleClick={buttonClicked} name="CONTACT" /></p>
                </div>
             </div>
        </div>
    )
}

export default Links;