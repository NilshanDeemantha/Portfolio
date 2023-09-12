import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="BuilTrackr"
          des=" BuilTrackr is a platform created for the construction companies
          to manage cross site task scheduling ,
          resource management ,
          communication and collaboration."
          src={projectOne}
          react={true}
          node={true}
          css={true}
          psotgresql={true}
        />
        <ProjectsCard
          title="Gardening Hub"
          des=" Simply It is an online web system for busy peoples with day to day life which provides helps to overcome problems that
          are occurs when home gardening. "
          src={projectTwo}
          html={true}
          php={true}
          js={true}
          mysql={true}

        />
        <ProjectsCard
          title="TO DO App"
          des=" It is a simple to-do app, designed to help user stay organized through the system. 
          With our user-friendly interface, you can easily create and manage your tasks. "
          src={projectTwo}
          react={true}
          node={true}
          css={true}
          psotgresql={true}
        />
        
      </div>
    </section>
  );
};

export default Projects;
