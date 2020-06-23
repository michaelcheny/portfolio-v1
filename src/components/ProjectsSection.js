import React from "react";
import * as projects from "../assets/projects/projects.json";

const ProjectsSection = () => {
  return (
    <section className="h-screen flex justify-center " id="projects">
      <div className="flex flex-col justify-center w-4/5 border border-dracula-5">
        <h3 className="text-2xl">
          Projects
          <hr className=" w-5/12 h-0 pb-4 border-background-ternary border-t" />
        </h3>
        {console.log(projects.default)}
        {projects.default.map((project) => (
          <Project project={project} />
        ))}
        {/* <div className="bg-dracula-2 flex flex-col border border-background-ternary">sdf</div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;

const Project = ({ project }) => {
  return (
    <div className="bg-dracula-2 flex flex-col border border-background-ternary">{project.name}</div>
  );
};
