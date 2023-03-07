import React from "react";
import "./Projects.css"
import ProjectCard from "./Project Card/ProjectCard";
import projects from "../../../Projects.json";

function Projects() {
  return (
    <div className="projectsMain container">
      <h1>Projects Page</h1>
      <p>
        This is a selection of my previous Challenges that I created during my bootcamp using the following skills:
      </p>
      <div className="skillList">
      {/* a selection of font awesome images */}
      <ul>
        <li><i className="fab fa-html5 fa-x"> HTML</i></li>
        <li><i className="fab fa-css3-alt fa-x"> CSS</i></li>
        <li><i className="fab fa-js-square fa-x"> JavaScript</i></li>
      </ul>
      </div>
      <div>
        <h3 className="projectsTitle">Projects:</h3>
        <div className="projects">
          {/* links all the pieces i needed to use for the project cards */}
        {projects.map(p => <ProjectCard name={p.name} description={p.description} img={p.image} link={p.link} github={p.github}/>)}
      </div>
      </div>
    </div>
  );
}

export default Projects;
