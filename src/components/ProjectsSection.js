import React from "react";
import * as data from "../assets/projects/projects.json";

const ProjectsSection = () => {
  return (
    <section className="flex justify-center items-center justify-center" id="projects">
      <div className="flex flex-col justify-center items-center w-4/5 border border-dracula-5">
        <h3 className="text-2xl">
          Projects
          <hr className=" w-5/12 h-0 pb-4 border-background-ternary border-t" />
        </h3>
        <div className="border border-dracula-3 flex flex-col items-center">
          {console.log(data.projects)}
          {data.projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
        {/* <div className="bg-dracula-2 flex flex-col border border-background-ternary">sdf</div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;

const Project = ({ project }) => {
  return (
    // <div className="bg-dracula-2 flex flex-col border border-background-ternary w-full h-120 my-8">
    //   {project.name}
    // </div>
    <div className="flex md:flex-row flex-wrap  flex-grow rounded overflow-hidden shadow-lg bg-background-primary shadow-2xl my-10 h-auto border-red-600 border break-words">
      <img className=" w-80 h-auto object-scale-down" src={project.image} alt={`${project.name}`} />
      <div className="px-6 py-4 break-words">
        <div className="font-bold text-xl mb-2 text-copy-primary flex-wrap break-words">
          {project.name}
        </div>
        <p className="text-copy-primary text-base ">{project.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  );
};
