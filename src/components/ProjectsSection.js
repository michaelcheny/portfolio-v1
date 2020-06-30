import React from "react";
import * as data from "../assets/projects/projects.json";

const ProjectsSection = () => {
  return (
    <section className="flex justify-center items-center" id="projects">
      <div className="flex flex-col justify-center items-center w-4/5 border border-dracula-5">
        <h3 className="text-2xl">
          Projects
          <hr className=" w-full h-0 pb-4 border-background-ternary border-t" />
        </h3>
        <div className="border border-red-500 flex flex-col lg:flex-row w-full flex-wrap  justify-around">
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
    // <div className="flex md:flex-row flex-wrap  flex-grow rounded overflow-hidden bg-background-primary shadow-2xl my-10 h-auto border-red-600 border break-words">
    // <div>
    //   <img
    //     className=" h-auto object-scale-down border border-dracula-5"
    //     src={project.image}
    //     alt={`${project.name}`}
    //   />
    //   <div className="flex flex-col overflow-hidden">
    //     <div className="px-6 py-4 break-words flex-wrap overflow-hidden">
    //       <div className="font-bold text-xl mb-2 text-copy-primary">{project.name}</div>
    //       <p className="text-copy-primary text-base border border-dracula-5 ">{project.description}</p>
    //     </div>
    //     <div className="px-6 py-4">
    //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    //         #photography
    //       </span>
    //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    //         #travel
    //       </span>
    //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
    //         #winter
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-md rounded overflow-hidden shadow-md">
      <img className="w-full" src={project.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">
          {project.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        {project.techStack.map((stack) => (
          <span className="inline-block bg-background-secondary rounded-sm px-3 py-1 text-sm font-semibold text-copy-primary mr-2">
            {stack}
          </span>
        ))}

        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span> */}
      </div>
    </div>
  );
};
