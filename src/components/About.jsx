import React from "react";
import Badge from "./Badge";

function About(props){

    let skills = [ 
        "csharp",
        "unitywhite",
        "html",
        "css",
        "javascript",
        "react",
        "photoshop",
        "blender",
    ];

    function createSkillBadges(skill){
        return (<Badge 
        skill={skill} 
        key={skills.indexOf(skill)}
        />)
    }

    return(
        <div>
            <div className="col-md-9 col-sm-12" id="about-page">
                <p>Emergency physician, fellowship trained in bedside ultrasound.</p>
                <h2>Exploring virtual reality, game design, and interactive narratives in medical education.</h2>
                <br></br>
                    <p>Experience with:</p>
                    <div className="about-badges">{skills.map(createSkillBadges)}</div>
            </div>
        </div>
    )
}

export default About;