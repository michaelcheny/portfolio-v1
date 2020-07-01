import React from "react";
import * as data from "../assets/projects/projects.json";
import githubIcon from "../assets/images/github.svg";
import youtubeIcon from "../assets/images/youtube.svg";

const ProjectsSection = () => {
  return (
    <section className="flex justify-center items-center" id="projects">
      <div className="flex flex-col justify-center items-center w-4/5 my-32 max-w-screen-xl">
        <h3 className="text-2xl self-start ml-6">
          Projects
          <hr className=" w-full h-0 pb-4 border-background-ternary border-t" />
        </h3>
        <div className=" flex flex-col lg:flex-row w-full flex-wrap  justify-evenly">
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
    <div className="max-w-sm xl:max-w-md rounded-sm m-8 overflow-hidden shadow-md mb-4 self-center text-copy-secondary">
      <img className="w-full" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <div className=" mb-2">
          <span className="font-bold text-xl ">{project.name}</span>
          <div className="inline-block float-right">
            <a className="inline-block" href={project.githubLink}>
              <img className="h-8 mr-2" src={githubIcon} alt="github" title="GitHub" />
            </a>
            <a className="inline-block" href={project.demoLink}>
              <img className="h-8" src={youtubeIcon} alt="youtube" title="Demo" />
            </a>
          </div>
        </div>
        <p className="text-base">{project.description}</p>
      </div>
      <div className="px-6 pb-3 text-xs">
        {project.techStack.map((stack) => (
          <span className="inline-block bg-background-secondary rounded-sm px-3 py-1 text-sm font-normal text-copy-primary mr-2">
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};
