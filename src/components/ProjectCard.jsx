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

    function createUrl(url){
        if (url === "none"){
            return(
                <h1>{props.title}</h1>
            )
        } else {
            return (
                <a href={props.url} alt="..."><h1 className="box-underline">{props.title}</h1></a>
            )
        }
    }

    function configureDate(){
        if (props.dateEnd){
            return(
              <p>{props.dateStart} to {props.dateEnd}</p>
            )
        } else {
            return(
                <p>{props.dateStart}</p>
            )
        }
    }
    //if vertical height of window shrinks beyond limit collapse subtitle text into "..."

    return(
        <div className="project-card">
            <div>
                {createUrl(props.url)}
                {configureDate()}
                <h4>{props.subtitle}</h4>
            </div>
            <div className="badges">
                {props.skills.map(createSkillBadges)}
            </div>
        </div>
        )
}

export default ProjectCard;