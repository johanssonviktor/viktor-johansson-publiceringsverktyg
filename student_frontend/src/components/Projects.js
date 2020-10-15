import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { SectionProjects, SectionCenter } from "../elements/SectionElements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <SectionProjects>
      <Title title={title} />
      <SectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </SectionCenter>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Alla projekt
        </Link>
      )}
    </SectionProjects>
  )
}

export default Projects
