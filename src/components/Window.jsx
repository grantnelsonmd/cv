import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";

function Window(props){

    function createProjectCard(project){
        return( <ProjectCard 
            key={projects.indexOf(project)}
            title={project.title}
            dateStart={project.dateStart}
            dateEnd={project.dateEnd}
            subtitle={project.subtitle}
            skills={project.skills}
            url={project.url}
        />)
    }

    return(
        <div className="card-window">
            {projects.map(createProjectCard)}
        </div>
    )
}

export default Window;