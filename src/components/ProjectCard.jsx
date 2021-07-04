import React from "react";
import Badge from "./Badge";

//use array of skills-img and map through to put image of each?

function ProjectCard(props){

    function createSkillBadges(skill){
        return (<Badge 
        skill={skill} 
        key={props.skills.indexOf(skill)}
        />)
    }

    //if vertical height of window shrinks beyond limit collapse subtitle text into "..."

    return(
        <div className="project-card">
            <header className="project-card-header">
                <a href="..." alt="..."><h1>{props.title}</h1></a>
                <p>{props.dateStart} to {props.dateEnd}</p>
                <h4>{props.subtitle}</h4>
            </header>
            <div className="badges">
                {props.skills.map(createSkillBadges)}
            </div>
        </div>
        )
}

export default ProjectCard;